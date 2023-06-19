import DownloadCertificate from './certificate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  'title': 'In giấy chứng nhận',
  'description': 'Trang in giấy chứng nhận của trung tâm đăng kiểm',
}

export default function Print() {
  return (
    <div className='bg-white text-black w-full'>
      <div className='container my-20 px-20 mx-auto'>
        <DownloadCertificate />
      </div>
    </div>
  );
}