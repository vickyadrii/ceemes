import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xl mx-auto w-full p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
