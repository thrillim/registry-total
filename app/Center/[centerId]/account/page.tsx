import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

import { Metadata } from 'next';
import NavBar from './navbar';
import CenterInfo from './center-form';

export const metadata: Metadata = {
  title: 'Tài khoản',
  description:
    'Thông tin tài khoản Hệ thống đăng kiểm của Cục Đăng kiểm Việt Nam',
};

export default async function CenterAccount({
  params,
}: {
  params: { centerId: string };
}) {
  const session = await getServerSession(authOptions);
  if (session.user.RegistCenterId !== Number(params.centerId)) redirect(`/Center/${session.user.RegistCenterId}/account`);
  else
    return (
      <>
        <div className='flex flex-col bg-white'>
          <div className='border-b z-50'>
            <NavBar centerId={params.centerId}/>
          </div>
          <div className='container my-5 pt-5'>
            <h2 className='text-3xl font-bold text-center text-primary'>
              Tổng quan tài khoản
            </h2>
            <div className='container mx-auto mt-5'>
              <CenterInfo />
            </div>
          </div>
        </div>
      </>
    );
}
