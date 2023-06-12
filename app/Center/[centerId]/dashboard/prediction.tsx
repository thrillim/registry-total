'use client';
import useSWR from 'swr';
const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const prediction = 123;

export default function NextMonthPrediction({ centerId }) {
  const res1 = useSWR(
    `http://localhost:3000/api/getExpired/${centerId}`,
    fetcher
  );
  const res2 = useSWR(
    `http://localhost:3000/api/getNewCars/${centerId}`,
    fetcher
  );

  if (res1.isLoading || res2.isLoading) return 'Đang tải thông tin...';

  if (res1.error || res2.error) return 'Đã xảy ra lỗi.';

  return (
    <>
      <div className='container my-6'>
        <ul>
          <li className=''>
            Số xe đã và sắp hết hạn đăng kiểm tại trung tâm:{' '}
            <span className='text-accent'> {res1.data.length} </span>
            xe.
          </li>
          <li className=''>
            Số xe chưa đăng kiểm lần đầu tại {res2.data.province}:{' '}
            <span className='text-accent'> {res2.data.newCars} </span>
            xe.
          </li>
          <li className=''>
            Số trung tâm đang hoạt động tại {res2.data.province}:{' '}
            <span className='text-accent'> {res2.data.activeCenter} </span>
            xe.
          </li>
          <li className=''>
            Dự báo số xe đăng kiểm tại trung tâm trong 30 ngày tới:
            <span className='text-accent'>
              {' '}
              {res1.data.length +
                Math.ceil(res2.data.newCars / res2.data.activeCenter)}{' '}
            </span>
            xe.
          </li>
        </ul>
      </div>
    </>
  );
}
