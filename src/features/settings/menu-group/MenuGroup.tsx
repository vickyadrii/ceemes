import { useState } from "react";
import Card from "@/components/common/Card";
import MenuGroupTable from "./components/MenuGroupTable";
import AddMenuGroup from "./components/AddMenuGroup";
import type { SidebarItemType } from "@/types";

const MenuGroup = () => {
  const [menuGroups, setMenuGroups] = useState<SidebarItemType[]>([]);

  const handleAddGroup = (data: { title: string; href: string }) => {
    const newItem: SidebarItemType = {
      ...data,
      children: [],
    };
    setMenuGroups((prev) => [...prev, newItem]);
  };

  const handleEdit = (index: number, updated: SidebarItemType) => {
    setMenuGroups((prev) => prev.map((item, i) => (i === index ? { ...item, ...updated } : item)));
  };

  const handleDelete = (index: number) => {
    setMenuGroups((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between gap-6">
        <h2 className="text-xl font-bold">Menu Groups</h2>
        <AddMenuGroup onAddGroup={handleAddGroup} />
      </div>

      <MenuGroupTable menuGroups={menuGroups} onEdit={handleEdit} onDelete={handleDelete} />
    </Card>
  );
};

export default MenuGroup;
