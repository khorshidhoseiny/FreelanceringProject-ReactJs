import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";
import Loading from "../../ui/Loading";
import { MdEditDocument, MdEditNote } from "react-icons/md";

const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onReSendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return navigate("/complete-profile");
      if (Number(user.status) !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "ADMIN") return navigate("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <button
        className="bg-secondary-200/50 p-1 hover:bg-secondary-300/70 transition-all duration-300 rounded-full"
        onClick={onBack}
      >
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      {otpResponse && (
        <p className="flex items-center text-sm text-secondary-500 gap-x-2 my-4">
          <span> {otpResponse?.message}</span>
          <button onClick={onBack}>
            <TbEdit className="w-6 h-6 text-primary-900" />
          </button>
        </p>
      )}

      <form className="space-y-10" onSubmit={checkOtpHandler}>
        <p className="font-bold mt-5 text-secondary-800">
          کد تایید را وارد کنید
        </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>&nbsp;</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-1 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.7rem 0.3rem",
            border: "1px solid rgb(var(--color-secondary-400))",
            borderRadius: "0.6rem",
            backgroundColor: "transparent",
            color: "rgb(var(--color-secondary-700))",
          }}
        />
        <div>
          <div className="mb-4 flex justify-center items-center text-sm text-secondary-500">
            {/* {time > 0 ? (
              <p> {time} ثانیه تا ارسال مجدد کد</p>
            ) : (
              <button onClick={onReSendOtp}>ارسال مجدد کد تایید</button>
            )} */}
          </div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn font-bold btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
export default CheckOTPForm;
