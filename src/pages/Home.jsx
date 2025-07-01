import { Link, useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import useLogout from "../features/authentication/useLogout";
import Loading from "../ui/Loading";

function Home() {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  const { logout } = useLogout();

  console.log(user?.status, user?.role);
  const roleTranslator = (role = "") => {
    if (role === "ADMIN") return "ادمین";
    if (role === "FREELANCER") return "فریلنسر";
    if (role === "OWNER") return "کارفرما";
  };

  const navigatorHandler = (role = "") => {
    if (role === "OWNER") return navigate("/owner");
    if (role === "FREELANCER") return navigate("/freelancer");
    if (role === "ADMIN") return navigate("/admin");
  };

  const statusStyle = [
    {
      label: "رد شده",
      className: "text-red-400 font-bold",
    },
    {
      label: "در انتظار تایید ... ",
      className: "text-orange-400 font-bold",
    },
    {
      label: "تایید شده 🥳",
      className: "text-green-500 font-bold",
    },
  ];
  return (
    <div className="h-full bg-secondary-0">
      <div className="container flex-col flex min-h-screen items-center justify-center relative xl:max-w-screen-xl">
        <h1 className="text-2xl md:text-3xl  justify-center flex  text-secondary-700 font-semibold">
          <span className="bg-gradient-to-r from-blue-500  to-fuchsia-400 inline-block text-transparent bg-clip-text">
            مرکوری&nbsp;
          </span>
          اپلیکیشنی پیشرفته برای فریلنسرینگ
        </h1>
        {isLoading && <Loading />}
        {!user && (
          <Link to={"/auth"}>
            <button
              className="text-secondary-100 bg-gradient-to-r
         from-blue-500 to-fuchsia-400 
         p-2 px-3 rounded-xl"
            >
              ورود یا ثبت نام
            </button>
          </Link>
        )}
        <div className="flex justify-center mt-9 gap-x-4">
          <h1 className="flex text-secondary-700">
            وضعیت شما :&nbsp;
            <p className={`${statusStyle[user?.status]?.className}`}>
              {statusStyle[user?.status]?.label}
            </p>
          </h1>
          <h1 className="flex text-secondary-700">
            نقش شما:&nbsp; <p>{roleTranslator(user?.role)}</p>
          </h1>
        </div>
        <div className="flex mt-10 justify-center items-center gap-6">
          {user?.status === 1 ? (
            <p>پروفایل شما در انتظار تایید مدیر است لطفا صبور باشید ...</p>
          ) : user?.status === 2 ? (
            <>
              <button
                className="gradient__effect btn p-3 text-secondary-700"
                onClick={() => navigatorHandler(user?.role)}
              >
                رفتن به صفحه دشبورد
              </button>
              <button className="btn p-3 btn--outline" onClick={logout}>
                خروج از حساب کاربری
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
