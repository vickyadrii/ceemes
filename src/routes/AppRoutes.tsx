import { Route, Routes } from "react-router";
import { HomePage, LoginPage, MenuGroupPage, MenuPage } from "@/pages";
import { AppLayout, AuthLayout } from "@/layouts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="settings">
          <Route path="menu-groups" element={<MenuGroupPage />} />
          <Route path="menus" element={<MenuPage />} />
        </Route>
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
