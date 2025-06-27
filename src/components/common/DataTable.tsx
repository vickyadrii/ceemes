import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import React from "react";

export type ColumnType<T> = {
  title: string;
  dataIndex?: keyof T;
  key?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, record: T, index: number) => React.ReactNode;
  className?: string;
};

type DataTableProps<T> = {
  columns: ColumnType<T>[];
  dataSource: T[];
};

export function DataTable<T>({ columns, dataSource }: DataTableProps<T>) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col, idx) => (
              <TableHead key={col.key || idx} className={col.className}>
                {col.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataSource.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center py-4 text-muted-foreground">
                No data found.
              </TableCell>
            </TableRow>
          ) : (
            dataSource.map((record, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col, colIndex) => {
                  const value = col.dataIndex ? record[col.dataIndex] : undefined;
                  return (
                    <TableCell key={col.key || colIndex} className={col.className}>
                      {col.render ? col.render(value, record, rowIndex) : (value as React.ReactNode)}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
