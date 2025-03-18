import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
      <div className="w-full h-full sm:w-[calc(100dvw-80px)] sm:h-[calc(100vh-20px)] lg:w-[calc(100dvw-80px)] lg:h-[calc(100vh-20px)] flex bg-white">
        <Sidebar />
        <div className="w-full sm:w-[calc(100%-80px)] h-full flex flex-col">
          <div className="overflow-y-auto">
            <Outlet />
          </div>
        </div>
    </div>
  );
};

export default Layout;
