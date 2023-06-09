'use client';
import { Center, columns } from './columns';
import { DataTable } from '@/app/components/shadcn-ui/data-table';
import useSWR  from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Centers() {
  // const data = await fetch('http://localhost:3000/api/getCenters');
  // const centers: Center[] = await data.json();
  // console.log('Love you');
  // console.log(centers);
  const { data: centers, error, isLoading } = useSWR(
    'http://localhost:3000/api/getCenters',
    fetcher
  );
  if (error) return 'An error has occurred.';
  if (isLoading) return 'Loading centers...';
  return (
    <DataTable
      columns={columns}
      data={centers}
    />
  );
}
