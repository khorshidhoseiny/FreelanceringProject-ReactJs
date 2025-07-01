import { Link } from "react-router-dom";
import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="h-screen flex justify-center items-center bg-secondary-0">
      <div className="container max-w-screen-sm">
        <div className="flex flex-col justify-center items-center rounded-2xl border p-9 border-secondary-200 ">
          <Link to="/">
            <img src="/Mercury-Logo.png" alt="mercury-logo" className="w-36" />
          </Link>

          <AuthContainer />
        </div>
      </div>
    </div>
  );
}
export default Auth;
