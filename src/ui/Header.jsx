import { Link, useNavigate } from "react-router-dom";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import useUser from "../features/authentication/useUser";

function Header() {
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <div className="bg-secondary-0 container xl:max-w-screen-xl py-4 md:px-8 px-3  border-b border-secondary-200">
      <div className="w-full mx-auto">
        <nav className="flex items-center sm:justify-between justify-center">
          <div className="items-center relative flex justify-between gap-x-2">
            {user ? (
              <UserAvatar />
            ) : (
              <Link to={"/auth"}>
                <button
                  className="text-stone-800 bg-gradient-to-r
               from-blue-500 to-fuchsia-400 
               p-2 px-3 rounded-xl"
                >
                  ورود یا ثبت نام
                </button>
              </Link>
            )}
            <HeaderMenu />
          </div>
          <button className="hidden sm:block " onClick={() => navigate("/")}>
            <img src="/Mercury-Logo.png" alt="logo" className="w-24  md:w-36" />
          </button>
        </nav>
      </div>
    </div>
  );
}
export default Header;
