import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

import { Metadata } from 'next';
import MainNav from '../main-nav';
import { SearchBar } from './searchBar';
import CheckAll from './check_all';
export const metadata: Metadata = {
  title: 'Đăng kiểm xe',
  description: 'Trang đăng kiểm xe của trung tâm đăng kiểm',
};

export default async function CarRegistry({
  params,
}: {
  params: { centerId: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/');
  else if (session.user.accRole === 'Admin') redirect('/Register/dashboard');
  else if (session.user.RegistCenterId !== Number(params.centerId)
    && session.user.accRole === 'User')
    redirect(`/Center/${session.user.RegistCenterId}/registry`);
  else {
    return (
      <div className='w-full min-h-screen bg-white text-black mx-auto'>
        <div className='border-b z-50'>
          <MainNav />
        </div>

        <div className='min-w-max max-w-md mx-auto my-10'>
          <SearchBar />
        </div>
        <CheckAll />

        {/* {check1 &&
        check2 &&
        check3 &&
        check4 &&
        check5 ? (
          <div>
            <span className='text-lg font-semibold text-green-400'>
              Kiểm định thành công
            </span>
            <DownloadCertificate />
          </div>
        ) : (
          <div className='mx-auto flex flex-col gap-4'>
            <span className='text-lg font-semibold text-error'>
              Kiểm định không thành công
            </span>
          </div>
        )} */}
      </div>
    );
  }

}
