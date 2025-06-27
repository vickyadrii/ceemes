export type User = {
  id: string
  username: string;
}

export type SidebarItemType = {
  title: string;
  href: string;
  icon?: string;
  children?: SidebarItemType[]
};
