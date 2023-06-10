"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Register = {
    bienSo: string;
    loai: string;
    centerName: string;
    centerProvince: string;
    status: string;
    statusCreatedAt: Date;
    statusUpdatedAt: Date;
    statusValidUntil: Date;
};

export const columns: ColumnDef<Register>[] = [
    {
        accessorKey: 'bienSo',
        header: 'Biển số xe',
    },
    {
        accessorKey: 'loai',
        header: 'Loại xe',
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
        accessorKey: 'status',
        header: 'Trạng thái đăng kiểm',
    },
    {
        accessorKey: 'statusCreatedAt',
        header: 'Ngày đăng kiểm',
    },
    {
        accessorKey: 'statusUpdatedAt',
        header: 'Ngày cập nhật',
    },
    {
        accessorKey: 'statusValidUntil',
        header: 'Ngày hết hạn',
    },
];
