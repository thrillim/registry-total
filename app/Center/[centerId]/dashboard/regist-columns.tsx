"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react";

export type Register = {
  bienSo: string;
  loai: string;
  status: string;
  statusNote: string;
  statusCreatedAt: Date;
  statusValidUntil: Date;
};

export const columns: ColumnDef<Register>[] = [
  {
    accessorKey: 'bienSo',
    header: ({ column }) => {
      return (
        <div
          className='flex items-center hover:cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Biển số xe
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </div>
      );
    },
  },
  {
    accessorKey: 'loai',
    header: 'Loại xe',
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <div
          className='flex items-center hover:cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Kết quả đăng kiểm
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </div>
      );
    },
  },
  {
    accessorKey: 'statusCreatedAt',
    // header: 'Ngày đăng kiểm',
    header: ({ column }) => {
      return (
        <div
          className='flex items-center hover:cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Ngày đăng kiểm
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </div>
      );
    },
  },
  {
    accessorKey: 'statusValidUntil',
    // header: 'Ngày hết hạn',
    header: ({ column }) => {
      return (
        <div
          className='flex items-center hover:cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Ngày hết hạn
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </div>
      );
    },
  },
  {
    accessorKey: 'statusNote',
    header: 'Nội dung ghi chú',
  },
];
