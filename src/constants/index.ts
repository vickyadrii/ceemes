import type { SidebarItemType } from "@/types";

export const TOKEN: string = 'ceemes_token';
export const MENU_GROUPS_KEY: string = "ceemes-menu-groups";

export const sidebarItems: SidebarItemType[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: "/assets/icons/ic_dashboard.svg",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: "/assets/icons/ic_settings.svg",
    children: [
      {
        title: "Menu Group Management",
        href: "/settings/menu-groups",

      },
      {
        title: "Menu Management",
        href: "/settings/menus",
      },
    ],
  },
];
