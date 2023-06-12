import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

import { Metadata } from 'next';
import MainNav from '../main-nav';

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
  if (!session) redirect('/')
  else if (session.user.RegistCenterId !== Number(params.centerId))
    redirect(`/Center/${session.user.RegistCenterId}/registry`);
  else
    return (
      <div className='w-full min-h-screen bg-white text-black'>
        <div className='border-b z-50'>
          <MainNav centerId={params.centerId} />
        </div>
      </div>
    );
}
