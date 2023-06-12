'use client';

import { ExpiredCars, columns } from './expired-columns';
import { DataTable } from '@/app/components/shadcn-ui/data-table';
import useSWR  from 'swr';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export default function ExpiredCars({ centerId }) {
  // const { data: cars, error, isLoading } = useSWR(
  //   'http://localhost:3000/ExpiredCars.json',
  //   fetcher
  // );
  const { data: cars, error, isLoading } = useSWR(
    centerId ? `http://localhost:3000/api/getExpired/${centerId}` : null,
    fetcher
  );
  if (error) return 'Có lỗi xảy ra khi tải thông tin';
  if (isLoading) return 'Đang tải thông tin....';

  // modify data to match format of the table
  cars.forEach((car: any) => {
    // format car.statusCreateAt date to 'dd-mm-yy'
    car.statusCreatedAt = new Date(car.statusCreatedAt).toLocaleDateString('vi-VN');
    // format car.statusValidUntil date to dd-mm-yy
    car.statusValidUntil = new Date(car.statusValidUntil).toLocaleDateString('vi-VN');
    // add bienSo to car
    car.bienSo = car.CarInfo.bienSo;
    // add loai to car
    car.loai = car.CarInfo.loai;
    // add centerCode to car
    car.centerCode = car.RegistCenter.centerCode;
    // add centerProvince to car
    car.centerProvince = car.RegistCenter.centerProvince;
  })

  // modify data to match format of the table
  cars.forEach((car: any) => {
    // format car.statusCreateAt date to 'dd-mm-yy'
    car.statusCreatedAt = new Date(car.statusCreatedAt).toLocaleDateString('vi-VN');
    // format car.statusValidUntil date to dd-mm-yy
    car.statusValidUntil = new Date(car.statusValidUntil).toLocaleDateString('vi-VN');
    // add bienSo to car
    car.bienSo = car.CarInfo.bienSo;
    // add loai to car
    car.loai = car.CarInfo.loai;
  })

  return (
    <DataTable
      columns={columns}
      data={cars}
    />
  );
}
