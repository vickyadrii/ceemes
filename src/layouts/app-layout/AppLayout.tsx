import { Outlet } from "react-router";
import Sidebar from "./sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div className="">
      <Sidebar />
      <div className="pl-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
