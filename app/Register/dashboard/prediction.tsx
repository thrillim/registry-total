'use client';
import useSWR from 'swr';
const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function NextMonthPrediction() {
  const res1 = useSWR('http://localhost:3000/api/getExpired', fetcher);

  const res2 = useSWR('http://localhost:3000/api/getNewCars', fetcher);

  if (res1.isLoading || res2.isLoading) return 'Loading...';

  if (res1.error || res2.error) return 'Something wrong';

  return (
    <>
      <div className='container my-6'>
        <h2 className='text-xl'>
          Tổng số xe đăng kiểm tháng tới:
          <span className='text-accent'>
            {' '}
            {res1.data.length + res2.data.length}{' '}
          </span>
          xe.
        </h2>
      </div>
    </>
  );
}
