import Card from "@/components/common/Card";
import MenuManager from "./components/MenuManager";
import { updateMenuGroup } from "@/store/menuGroupSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import type { SidebarItemType } from "@/types";

const Menu = () => {
  const dispatch = useAppDispatch();
  const menuGroups = useAppSelector((state) => state.menuGroup);

  const handleUpdateGroup = (groupIndex: number, updatedGroup: SidebarItemType) => {
    dispatch(updateMenuGroup({ index: groupIndex, data: updatedGroup }));
  };

  return (
    <div className="space-y-6">
      <h2 className="md:text-xl text-base font-bold">Menu Management</h2>

      {menuGroups.map((group, index) => (
        <Card key={group.title}>
          <MenuManager groupIndex={index} group={group} onUpdateGroup={handleUpdateGroup} />
        </Card>
      ))}
    </div>
  );
};

export default Menu;
