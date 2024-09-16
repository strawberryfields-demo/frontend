import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DataTableProps as DefaultDataTableProps } from "@/types/table";
import { useState } from "react";
import { Button } from "../ui/button";
import { TableTitle } from "./TableElement";
import Pagination, { PaginationProps } from "../Pagination/Pagination";

type DataTableProps<TData, TValue> = DefaultDataTableProps<TData, TValue> & {
  title?: string;
  placeholder?: string;
  onSelectedRowDelete?: (selectedRows: TData[]) => void;
  pagination?: PaginationProps;
};

export function DataTable<TData, TValue>({
  title,
  placeholder,
  columns,
  data,
  onSelectedRowDelete,
  pagination,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  const onDelete = () => {
    if (!onSelectedRowDelete) return;

    const selectedRows = table
      .getRowModel()
      .rows.filter((row) => row.getIsSelected())
      .map((row) => row.original);

    onSelectedRowDelete(selectedRows);

    table.setRowSelection({});
  };

  return (
    <>
      <div className="py-4 flex justify-between items-center">
        <TableTitle title={title} />
        <div className="flex gap-1 items-center">
          {/* TODO: 삭제 onClick */}
          {onSelectedRowDelete && <Button onClick={onDelete}>삭제</Button>}
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className={header.column.columnDef.meta?.headerClassName}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  {placeholder}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {pagination && <Pagination className="py-4" {...pagination} />}
    </>
  );
}
