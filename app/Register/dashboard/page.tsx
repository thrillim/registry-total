import { Metadata } from "next";
import { Button } from '@/app/components/shadcn-ui/button';
import MainNav from './main-nav';
import Centers from './centers-table';

export const metadata: Metadata = {
  title: 'Cục Đăng kiểm Việt Nam',
  description:
    'Dashboard của Cục Đăng kiểm Việt Nam: Quản lý Trung tâm đăng kiểm, Cấp tài khoản Trun tâm đăn đăng kiểm, Quản lý đăng kiểm, Quản lý ô tô',
};

export default async function RegisterDashboarḍ̣̣̣() {
  return (
    <>
      <div className='flex flex-col'>
        <div className='border-b'>
          <MainNav />
        </div>
        <div className='flex-1 space-y-4 p-8 pt-6 bg-base-100 w-full'>
          <h2 className='font-bold text-3xl text-primary mx-10'>
            Trung tâm Đăng kiểm
          </h2>
          <div className='container mx-auto py-10 text-black'>
            <Centers />
          </div>
          <div className='my-5 ml-10 btn btn-primary'>
            <a href='#'>Thêm mới</a>
          </div>
        </div>
      </div>
    </>
  );
}
