import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ onSubmit, isSendingOtp, register }) {
  return (
    <div className=" p-3 rounded-xl">
      <form className="space-y-10" onSubmit={onSubmit}>
        <div className="text-secondary-700 mt-3 flex-col flex w-full justify-start">
          <h6 className="font-semibold">ورود | ثبت نام</h6>
          <p className="mt-5 text-secondary-500">
            سلام!
            <br />
            لطفا شماره موبایل خود را وارد کنید
          </p>
        </div>
        <TextField label="" name="phoneNumber" register={register} />

        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary font-bold w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
export default SendOTPForm;
