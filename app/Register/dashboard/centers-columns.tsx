"use client"

import { Button } from "@/app/components/shadcn-ui/button";
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

export type Center = {
  centerCode: string;
  centerName: string;
  centerProvince: string;
  centerAddress: string;
  centerHotline: string;
  centerEmail: string;
  centerStatus: "Hoạt động" | "Dừng hoạt động";
  centerManager: string;
};

export const columns: ColumnDef<Center>[] = [
  {
    accessorKey: 'centerCode',
    header: ({ column }) => {
      return (
        <div className="flex items-center hover:cursor-pointer"         
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Mã số
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      )
    },
    maxSize: 100,
  },
  {
    accessorKey: 'centerName',
    header: 'Tên trung tâm',
  },
  {
    accessorKey: 'centerProvince',
    header: 'Tỉnh thành',
    // header: ({ column }) => {
    //   return (
    //     <div className="flex items-center hover:cursor-pointer"         
    //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //     >
    //       Tỉnh thành
    //       <ArrowUpDown className="ml-2 h-4 w-4" />
    //     </div>
    //   )
    // },
  },
  {
    accessorKey: 'centerAddress',
    header: 'Địa chỉ trung tâm',
    size: 400,
    minSize: 200,
  },
  {
    accessorKey: 'centerHotline',
    header: 'Hotline',
  },
  {
    accessorKey: 'centerEmail',
    header: 'Email',
  },
  {
    accessorKey: 'centerStatus',
    header: ({ column }) => {
      return (
        <div className="flex items-center hover:cursor-pointer"         
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Trạng thái
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      )
    },
  },
  {
    accessorKey: 'centerManager',
    header: 'Quản lý/Người phụ trách',
  },
];
