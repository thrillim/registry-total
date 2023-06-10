"use client"

import { ColumnDef } from "@tanstack/react-table"

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
    header: 'Mã trung tâm',
    maxSize: 100,
  },
  {
    accessorKey: 'centerName',
    header: 'Tên trung tâm',
  },
  {
    accessorKey: 'centerProvince',
    header: 'Tỉnh/Thành phố',
  },
  {
    accessorKey: 'centerAddress',
    header: 'Địa chỉ',
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
    header: 'Trạng thái',
  },
  {
    accessorKey: 'centerManager',
    header: 'Quản lý',
  },
];
