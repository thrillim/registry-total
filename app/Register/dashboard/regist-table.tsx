'use client';

import { Register, columns } from './regist-columns';
import { DataTable } from '@/app/components/shadcn-ui/data-table';
import useSWR  from 'swr';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export default function Registers() {
  // const { data: regists, error, isLoading } = useSWR(
  //   'http://localhost:3000/Registers.json',
  //   fetcher
  // );
  const {
    data: registStatus,
    error,
    isLoading,
  } = useSWR('http://localhost:3000/api/getRegistStatus', fetcher);
  if (error) return 'Có lỗi xảy ra khi tải thông tin';
  if (isLoading) return 'Đang tải thông tin....';

  if (registStatus.length > 0) {
    registStatus.forEach((reStatus: any) => {
      // add CarInfo and RegistCenter to regists
      reStatus.bienSo = reStatus.CarInfo.bienSo;
      reStatus.loai = reStatus.CarInfo.loai;
      reStatus.centerCode = reStatus.RegistCenter.centerCode;
      reStatus.centerProvince = reStatus.RegistCenter.centerProvince;

      // format date to dd-mm-yy
      reStatus.statusCreatedAt = new Date(
        reStatus.statusCreatedAt
      ).toLocaleDateString('vi-VN');
      reStatus.statusValidUntil = new Date(
        reStatus.statusValidUntil
      ).toLocaleDateString('vi-VN');
    });
  }

  return (
    <DataTable
      columns={columns}
      data={registStatus}
    />
  );
}
