import type { SidebarItemType } from "@/types";
import EditMenu from "./EditMenu";
import { Button } from "@/components/ui/button";
import { DataTable, type ColumnType } from "@/components/common/DataTable";

type Props = {
  menus: SidebarItemType[];
  onEdit: (index: number, updated: SidebarItemType) => void;
  onDelete: (index: number) => void;
};

const MenuTable = ({ menus, onEdit, onDelete }: Props) => {
  const columns: ColumnType<SidebarItemType>[] = [
    { title: "#", render: (_v, _r, i) => i + 1 },
    { title: "Title", dataIndex: "title" },
    { title: "URL", dataIndex: "href" },
    {
      title: "Actions",
      className: "text-right",
      render: (_v, record, index) => (
        <div className="space-x-2 text-right">
          <EditMenu menu={record} onSave={(updated) => onEdit(index, updated)} />
          <Button size="sm" variant="outline-dark" onClick={() => onDelete(index)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return <DataTable columns={columns} dataSource={menus} />;
};

export default MenuTable;
