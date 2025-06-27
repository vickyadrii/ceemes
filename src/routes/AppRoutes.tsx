import { Route, Routes } from "react-router";
import { HomePage, LoginPage } from "@/pages";
import { AppLayout, AuthLayout } from "@/layouts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
