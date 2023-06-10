"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react";

export type Cars = {
    bienSo: string;
    ownerName: string;
    loai: string;
    nhanHieu: string;
    centerName: string;
    centerProvince: string;
    statusCreatedAt: Date;
    statusValidUntil: Date;
};

export const columns: ColumnDef<Cars>[] = [
    {
        accessorKey: 'bienSo',
        header: 'Biển số xe',
    },
    {
        accessorKey: 'ownerName',
        header: 'Tên chủ xe',
    },
    {
        accessorKey: 'loai',
        header: 'Loại xe',
    },
    {
        accessorKey: 'nhanHieu',
        header: 'Hãng xe',
    },
    {
        accessorKey: 'centerName',
        header: 'Trung tâm đăng kiểm',
    },
    {
        accessorKey: 'centerProvince',
        header: 'Tỉnh thành',
    },
    {
        accessorKey: 'statusCreatedAt',
        // header: 'Ngày đăng kiểm',
        header: ({ column }) => {
            return (
              <div className="flex items-center hover:cursor-pointer"         
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Ngày đăng kiểm
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </div>
            )
          },
    },
    {
        accessorKey: 'statusValidUntil',
        // header: 'Ngày hết hạn',
        header: ({ column }) => {
            return (
              <div className="flex items-center hover:cursor-pointer"         
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Ngày hết hạn
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </div>
            )
          },
    },
];
