import Card from "@/components/common/Card";
import MenuGroupTable from "./components/MenuGroupTable";
import AddMenuGroup from "./components/AddMenuGroup";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addMenuGroup, deleteMenuGroup, updateMenuGroup } from "@/store/menuGroupSlice";
import type { SidebarItemType } from "@/types";

const MenuGroup = () => {
  const menuGroups = useAppSelector((state) => state.menuGroup);
  const dispatch = useAppDispatch();

  const handleAddGroup = (data: SidebarItemType) => {
    dispatch(addMenuGroup({ ...data, children: [] }));
  };

  const handleEdit = (index: number, updated: SidebarItemType) => {
    dispatch(updateMenuGroup({ index, data: updated }));
  };

  const handleDelete = (index: number) => {
    dispatch(deleteMenuGroup(index));
  };
  return (
    <div className="space-y-6">
      <h2 className="md:text-xl text-base font-bold">Menu Group Management</h2>
      <Card className="space-y-4">
        <div className="flex items-center justify-between gap-6">
          <h2 className="md:text-lg text-sm font-semibold">Menu Groups</h2>
          <AddMenuGroup onAddGroup={handleAddGroup} />
        </div>

        <MenuGroupTable menuGroups={menuGroups} onEdit={handleEdit} onDelete={handleDelete} />
      </Card>
    </div>
  );
};

export default MenuGroup;
