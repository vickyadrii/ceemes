import { Button } from "@/components/ui/button";

import EditMenuGroup from "./EditMenuGroup"; 
import { DataTable, type ColumnType } from "@/components/common/DataTable";
import type { SidebarItemType } from "@/types";

type Props = {
  menuGroups: SidebarItemType[];
  onEdit: (index: number, updated: SidebarItemType) => void;
  onDelete: (index: number) => void;
};

const MenuGroupTable = ({ menuGroups, onEdit, onDelete }: Props) => {
  const columns: ColumnType<SidebarItemType>[] = [
    { title: "#", render: (_v, _r, i) => i + 1 },
    { title: "Group Name", dataIndex: "title" },
    { title: "URL", dataIndex: "href" },
    {
      title: "Action",
      className: "text-right",
      render: (_v, record, index) => (
        <div className="space-x-2 text-right">
          <EditMenuGroup menuGroup={record} onSave={(updated) => onEdit(index, updated)} />
          <Button size="sm" variant="outline-dark" onClick={() => onDelete(index)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return <DataTable columns={columns} dataSource={menuGroups} />;
};

export default MenuGroupTable;
