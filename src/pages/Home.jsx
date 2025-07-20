import { Link, useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import useLogout from "../features/authentication/useLogout";
import Loading from "../ui/Loading";
import RainbowGeradient from "../ui/RainbowGeradient";

function Home() {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  const { logout } = useLogout();

  console.log(user?.status, user?.role);
  const rolesTranslator = {
    ADMIN: "ادمین",
    FREELANCER: "فریلنسر",
    OWNER: "کارفرما",
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
      <div className="relative overflow-hidden">
        <div className="header-gradient"></div>
        <main className="relative z-10">
          <div className="container flex-col flex min-h-screen items-center justify-center relative xl:max-w-screen-xl">
            <h1 className="text-2xl fade-in md:text-3xl  justify-center flex  text-secondary-700 font-semibold">
              <span className="bg-gradient-to-r from-blue-500  to-fuchsia-400 inline-block text-transparent bg-clip-text">
                مرکوری&nbsp;
              </span>
              اپلیکیشنی پیشرفته برای فریلنسرینگ
            </h1>
            {isLoading && <Loading />}
            {!user && (
              <Link to={"/auth"}>
                <button
                  className="text-secondary-100 mt-7 bg-gradient-to-r
         from-blue-500/60 to-fuchsia-400/60 transition-all duration-500 ease-in-out hover:brightness-110
         p-2 px-3 rounded-xl"
                >
                  ورود یا ثبت نام
                </button>
              </Link>
            )}
            <div
              className={`flex  justify-center ${
                !user && "hidden"
              } items-center mt-9 gap-x-4`}
            >
              <h1 className="flex text-secondary-700">
                وضعیت شما :&nbsp;
                <p className={`${statusStyle[user?.status]?.className}`}>
                  {statusStyle[user?.status]?.label}
                </p>
              </h1>
              <h1 className="flex justify-center items-center text-secondary-700">
                نقش شما:&nbsp;{" "}
                <p className="bg-primary-400 rounded-full p-2">
                  {rolesTranslator[user?.role]}
                </p>
              </h1>
            </div>
            <div className="flex mt-10 justify-center items-center gap-6">
              {user?.status === 1 ? (
                <p>پروفایل شما در انتظار تایید مدیر است لطفا صبور باشید ...</p>
              ) : user?.status === 2 ? (
                <>
                  <button
                    className="gradient__effect btn p-3 text-secondary-0"
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
        </main>
      </div>
    </div>
  );
}
export default Home;
