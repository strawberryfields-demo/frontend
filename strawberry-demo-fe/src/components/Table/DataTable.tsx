import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DataTableProps as DefaultDataTableProps } from "@/types/table";
import { useState } from "react";
import { Button } from "../ui/button";
import { ModalTitle } from "../Modal/ModalElement";

type DataTableProps<TData, TValue> = DefaultDataTableProps<TData, TValue> & {
  onSelectedRowDelete?: (selectedRows: TData[]) => void;
};

export function DataTable<TData, TValue>({ columns, data, onSelectedRowDelete }: DataTableProps<TData, TValue>) {
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
      <div className="flex justify-between items-center">
        <ModalTitle>업로드할 음악 리스트</ModalTitle>
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
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
