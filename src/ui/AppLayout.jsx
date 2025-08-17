import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]  md:grid-cols-[15rem_1fr] grid-cols-[10rem_1fr] ">
      <Header />
      {children}
      <div className="bg-secondary-100 sm:p-8 p-4 overflow-y-auto">
        <div className="mx-auto  max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
