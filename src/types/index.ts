export type User = {
  username: string;
}

export type SidebarItemType = {
  title: string;
  href: string;
  icon?: string;
  children?: SidebarItemType[]
};
