import { useState } from "react";

import AddMenu from "./AddMenu";
import MenuTable from "./MenuTable";
import type { SidebarItemType } from "@/types";
import { toast } from "sonner";

type Props = {
  groupIndex: number;
  group: SidebarItemType;
  onUpdateGroup: (index: number, updatedGroup: SidebarItemType) => void;
};

const MenuManager = ({ groupIndex, group, onUpdateGroup }: Props) => {
  const [menus, setMenus] = useState<SidebarItemType[]>(group.children ?? []);

  const handleAdd = (menu: SidebarItemType) => {
    const updatedMenus = [...menus, menu];
    setMenus(updatedMenus);
    onUpdateGroup(groupIndex, { ...group, children: updatedMenus });
    toast.success("Menu added successfully");
  };

  const handleEdit = (index: number, updated: SidebarItemType) => {
    const updatedMenus = menus.map((m, i) => (i === index ? updated : m));
    setMenus(updatedMenus);
    onUpdateGroup(groupIndex, { ...group, children: updatedMenus });
    toast.success("Menu updated successfully");
  };

  const handleDelete = (index: number) => {
    const updatedMenus = menus.filter((_, i) => i !== index);
    setMenus(updatedMenus);
    onUpdateGroup(groupIndex, { ...group, children: updatedMenus });
    toast.success("Menu deleted successfully");
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Menus in "{group.title}"</h3>
        <AddMenu onAdd={handleAdd} />
      </div>

      <MenuTable menus={menus} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default MenuManager;
