"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react";

export type Cars = {
    bienSo: string;
    ownerName: string;
    ownerAddress: string;
    loai: string;
    nhanHieu: string;
    namSx: number;
    soQuanLy: string;
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
      accessorKey: 'ownerAddress',
      header: 'Địa chỉ chủ xe',
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
        accessorKey: 'namSx',
        header: 'Năm sản xuất',
    },
    {
        accessorKey: 'soQuanLy',
        header: 'Sổ quản lý',
    },
];
