import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";
// import { useDarkMode2 } from "../context/DarkmodeContext2";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-5 h-5 text-secondary-700" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-secondary-700" />
      )}
    </button>
  );
}
export default DarkModeToggle;
