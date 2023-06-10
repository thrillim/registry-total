"use client"

import { ColumnDef } from "@tanstack/react-table"

export type ExpiredCars = {
    bienSo: string;
    ownerName: string;
    centerName: string;
    centerProvince: string;
    status: string;
    statusCreatedAt: Date;
    statusValidUntil: Date;
};

export const columns: ColumnDef<ExpiredCars>[] = [
    {
        accessorKey: 'bienSo',
        header: 'Biển số xe',
    },
    {
        accessorKey: 'ownerName',
        header: 'Tên chủ xe',
    },
    {
        accessorKey: 'centerName',
        header: 'Trung tâm đăng kiểm',
    },
    {
        accessorKey: 'centerProvince',
        header: 'Tỉnh/Thành phố',
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
        accessorKey: 'statusValidUntil',
        header: 'Ngày hết hạn',
    },
];
