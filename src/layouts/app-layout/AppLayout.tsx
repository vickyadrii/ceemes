import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import { Outlet } from "react-router";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-64">
        <Header onToggleSidebar={() => setSidebarOpen(true)} />
        <main className="p-5 pt-24">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
