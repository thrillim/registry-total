'use client';
import { Center, columns } from './centers-columns';
import { DataTable } from '@/app/components/shadcn-ui/data-table';
import useSWR  from 'swr';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export default function Centers() {
  // const { data: centers, error, isLoading } = useSWR(
  //   'http://localhost:3000/RegistCenter.json',
  //   fetcher
  // );
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
