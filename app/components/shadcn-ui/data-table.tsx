"use client"

import * as React from "react"

import { Input } from './input';

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className='rounded-md border'>
      {table.getColumn('centerCode') ||
      table.getColumn('centerProvince') ||
      table.getColumn('ownerAddress') ? (
        <div className='flex items-center p-4 gap-2'>
          {table.getColumn('centerCode') ? (
            <Input
              placeholder='Tìm theo mã trung tâm...'
              value={
                (table.getColumn('centerCode')?.getFilterValue() as string) ??
                ''
              }
              onChange={(event) =>
                table
                  .getColumn('centerCode')
                  ?.setFilterValue(event.target.value)
              }
              className='max-w-sm'
            />
          ) : (
            <></>
          )}
          {table.getColumn('centerProvince') ? (
            <Input
              placeholder='Tìm theo khu vực...'
              value={
                (table.getColumn('centerProvince')?.getFilterValue() as string) ??
                ''
              }
              onChange={(event) =>
                table
                  .getColumn('centerProvince')
                  ?.setFilterValue(event.target.value)
              }
              className='max-w-sm'
            />
          ) : (
            <></>
          )}
          {table.getColumn('ownerAddress') ? (
            <Input
              placeholder='Tìm theo khu vực...'
              value={
                (table.getColumn('ownerAddress')?.getFilterValue() as string) ??
                ''
              }
              onChange={(event) =>
                table
                  .getColumn('ownerAddress')
                  ?.setFilterValue(event.target.value)
              }
              className='max-w-sm'
            />
          ) : (
            <></>
          )}
          {table.getColumn('loai') ? (
            <Input
              placeholder='Tìm theo loại xe...'
              value={
                (table.getColumn('loai')?.getFilterValue() as string) ??
                ''
              }
              onChange={(event) =>
                table
                  .getColumn('loai')
                  ?.setFilterValue(event.target.value)
              }
              className='max-w-sm'
            />
          ) : (
            <></>
          )}
          {table.getColumn('nhanHieu') ? (
            <Input
              placeholder='Tìm theo hãng sản xuất...'
              value={
                (table.getColumn('nhanHieu')?.getFilterValue() as string) ??
                ''
              }
              onChange={(event) =>
                table
                  .getColumn('nhanHieu')
                  ?.setFilterValue(event.target.value)
              }
              className='max-w-sm'
            />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}

      <Table className='table compact'>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className='h-24 text-center'
              >
                Không tìm thấy kết quả nào.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
