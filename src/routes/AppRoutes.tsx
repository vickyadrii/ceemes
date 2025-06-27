import { Route, Routes } from "react-router";
import { DynamicPage, HomePage, LoginPage, MenuGroupPage, MenuPage } from "@/pages";
import { AppLayout, AuthLayout } from "@/layouts";
import { useAppSelector } from "@/store/hooks";

const AppRoutes = () => {
  const menuGroups = useAppSelector((state) => state.menuGroup);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />

        <Route path="settings">
          <Route path="menu-groups" element={<MenuGroupPage />} />
          <Route path="menus" element={<MenuPage />} />
        </Route>

        {menuGroups.map((group) => {
          const routes = [];

          if (group.href) {
            routes.push(<Route key={group.href} path={group.href.replace(/^\//, "")} element={<DynamicPage />} />);
          }

          if (group.children?.length) {
            group.children.forEach((menu) => {
              if (menu.href) {
                routes.push(<Route key={menu.href} path={menu.href.replace(/^\//, "")} element={<DynamicPage />} />);
              }
            });
          }

          return routes;
        })}
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
