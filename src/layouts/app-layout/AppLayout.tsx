import { Outlet } from "react-router";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";

const AppLayout = () => {
  return (
    <div className="">
      <Sidebar />
      <div className="pl-64">
        <Header />
        <div className="p-5 pt-24">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
