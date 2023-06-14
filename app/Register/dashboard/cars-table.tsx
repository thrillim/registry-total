'use client';

import { Cars, columns } from './cars-columns';
import { DataTable } from '@/app/components/shadcn-ui/data-table';
import useSWR  from 'swr';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export default function Cars() {
  // const { data: cars, error, isLoading } = useSWR(
  //   'http://localhost:3000/Cars.json',
  //   fetcher
  // );
  const { data: cars, error, isLoading } = useSWR(
    'http://localhost:3000/api/getNewCars',
    fetcher
  );
  if (error) return 'Có lỗi xảy ra khi tải thông tin';
  if (isLoading) return 'Đang tải thông tin....';

  if (cars.length > 0) {
    // add ownerName and ownerAddress to car
    cars.forEach((car)=>{
      car.ownerName = car.owner.ownerName;
      car.ownerAddress = car.owner.ownerAddress;
    })
  }

  return (
    <DataTable
      columns={columns}
      data={cars}
    />
  );
}
