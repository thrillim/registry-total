"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Center = {
  centerCode: string
  centerName: string
  centerProvince: string
  centerAddress: string
  hotline: string
  email: string
  status: "Hoạt động" | "đóng cửa"
  manager: string
}

export const columns: ColumnDef<Center>[] = [
  {
    accessorKey: "centerCode",
    header: "Mã trung tâm",
  },
  {
    accessorKey: "centerName",
    header: "Tên trung tâm",
  },
  {
    accessorKey: "centerProvince",
    header: "Tỉnh/Thành phố",
  },
  {
    accessorKey: "centerAddress",
    header: "Địa chỉ",
  },
  {
    accessorKey: "hotline",
    header: "Hotline",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
  },
  {
    accessorKey: "manager",
    header: "Quản lý",
  },
  
]
