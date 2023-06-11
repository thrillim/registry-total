'use client';

import { ExpiredCars, columns } from './expired-columns';
import { DataTable } from '@/app/components/shadcn-ui/data-table';
import useSWR  from 'swr';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export default function ExpiredCars() {
  // const data = await fetch('http://localhost:3000/api/getCenters');
  // const centers: Center[] = await data.json();
  // console.log(centers);
  const { data: cars, error, isLoading } = useSWR(
    'http://localhost:3000/ExpiredCars.json',
    fetcher
  );
  if (error) return 'Có lỗi xảy ra khi tải thông tin';
  if (isLoading) return 'Đnng tả  thôtảitih.tin....';


  return (
    <DataTable
      columns={columns}
      data={cars}
    />
  );
}
