'use client';

import { Cars, columns } from './cars-columns';
import { DataTable } from '@/app/components/shadcn-ui/data-table';
import useSWR  from 'swr';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export default function Cars() {
  // const data = await fetch('http://localhost:3000/api/getCenters');
  // const centers: Center[] = await data.json();
  // console.log(centers);
  const { data: cars, error, isLoading } = useSWR(
    'http://localhost:3000/Cars.json',
    fetcher
  );
  if (error) return 'An error has occurred.';
  if (isLoading) return 'Loading centers...';


  return (
    <DataTable
      columns={columns}
      data={cars}
    />
  );
}
