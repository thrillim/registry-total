import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

import { Metadata } from 'next';
import MainNav from '../main-nav';
import RegisterSummary from './summary';
import Registers from './regist-table';
import ExpiredCars from './expired-table';
import NextMonthPrediction from './prediction';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard của Trung tâm Đăng kiểm',
};

export default async function CenterDashboarḍ̣̣̣({
  params,
}: {
  params: { centerId: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/');
  else if (session.user.accRole === 'Admin') redirect('/Register/dashboard');
  else if (session.user.RegistCenterId !== Number(params.centerId) 
          && session.user.accRole === 'User') 
    redirect(`/Center/${session.user.RegistCenterId}/dashboard`);
  else
    return (
      <>
        <div className='flex flex-col bg-white text-black'>
          <div className='border-b z-50'>
            <MainNav centerId={session.user.RegistCenterId}/>
          </div>
          <div
            id='ManageReg'
            className='flex-1 space-y-4 p-8 mt-3 bg-base-100 w-full min-h-screen'
          >
            <h2 className='font-bold text-3xl text-primary mx-10'>
              Quản lý đăng kiểm
            </h2>
            <div className='flex flex-col gap-7'>
              <div className='container max-w-[90%] mx-auto'>
                <RegisterSummary centerId={session.user.RegistCenterId}/>
              </div>
              <div className='container max-w-[90%] mx-auto'>
                <h3 className='font-bold text-2xl text-primary my-5 mx-auto'>
                  Bảng theo dõi Đăng kiểm
                </h3>
                <Registers centerId={session.user.RegistCenterId} />
              </div>
              <div className='container max-w-[90%] mx-auto'>
                <h3 className='font-bold text-2xl text-primary my-5 mx-auto'>
                  Xe đã và sắp hết hạn đăng kiểm
                </h3>
                <ExpiredCars centerId={session.user.RegistCenterId} />
              </div>
              <div className='container max-w-[90%] mx-auto'>
              <h3 className='font-bold text-2xl text-primary my-5 mx-auto'>
                Dự báo đăng kiểm mới
              </h3>
              <NextMonthPrediction centerId={session.user.RegistCenterId} />
            </div>
            </div>
          </div>
        </div>
      </>
    );
}
