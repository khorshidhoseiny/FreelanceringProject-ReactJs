import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/authentication/Logout";

function HeaderMenu() {
  return (
    <div>
      <ul
        className=" px-6 md:flex gap-x-3 hidden 
      text-secondary-700 items-center"
      >
        <li className="flex">
          <DarkModeToggle />
        </li>
        <li className="flex items-center justify-center">
          <Logout />
        </li>
      </ul>
    </div>
  );
}
export default HeaderMenu;
