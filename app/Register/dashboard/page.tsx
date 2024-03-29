import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

import { Metadata } from 'next';
import MainNav from './main-nav';
import Centers from './centers-table';
import AddAccountForm from './account-form';
import AddCenterForm from './center-form';
import RegisterSummary from './summary';
import Registers from './regist-table';
import ExpiredCars from './expired-table';
import NextMonthPrediction from './prediction';
import Cars from './cars-table';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cục Đăng kiểm Việt Nam',
  description:
    'Dashboard của Cục Đăng kiểm Việt Nam: Quản lý Trung tâm đăng kiểm, Cấp tài khoản Trun tâm đăn đăng kiểm, Quản lý đăng kiểm, Quản lý ô tô',
};

export default async function RegisterDashboarḍ̣̣̣() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/');
  else if (session.user.accRole !== 'Admin') redirect('/');
  else
    return (
      <>
        <div className='flex flex-col bg-white text-black'>
          <div className='border-b z-50'>
            <MainNav />
          </div>
          <div className='flex-1 space-y-4 p-8 mt-3 bg-base-100 w-full'>
            <h2 className='font-bold text-3xl text-primary mx-10'>
              Trung tâm Đăng kiểm
            </h2>
            <div className='container mx-auto py-5 text-black'>
              <Centers />
            </div>
            <Link className='my-5 ml-10 btn btn-primary' href='#AddCenter'>
              <div>Thêm mới</div>
            </Link>
          </div>

          <div className='divider '></div>

          {/* Them moi trung tam */}
          <div
            id='AddCenter'
            className='p-8 pt-6 bg-base-100 w-full min-h-screen'
          >
            <h2 className='font-bold text-3xl text-primary mx-10'>
              Thêm Trung tâm đăng kiểm
            </h2>
            <div className='container mx-auto py-10 text-black'>
              <AddCenterForm />
            </div>
          </div>

          <div className='divider'></div>

          {/* Cấp tài khoản cho trung tâm đăng kiểm */}
          <div
            id='AddAccount'
            className='p-8 pt-6 bg-base-100 w-full min-h-screen'
          >
            <h2 className='font-bold text-3xl text-primary mx-10'>
              Cấp tài khoản
            </h2>
            <div className='container mx-auto py-10 text-black'>
              <AddAccountForm />
            </div>
          </div>

          <div className='divider'></div>

          {/* Quản lý đăng kiểm */}
          <div
            id='ManageReg'
            className='p-8 pt-6 bg-base-100 w-full min-h-screen'
          >
            <h2 className='font-bold text-3xl text-primary mx-10'>
              Quản lý đăng kiểm
            </h2>
            <div className='container my-5'>
              <RegisterSummary />
            </div>
            <div className='container mt-16 max-w-[95%] mx-auto'>
              <h3 className='font-bold text-2xl text-primary my-5 mx-auto'>
                Bảng theo dõi Đăng kiểm
              </h3>
              <Registers />
            </div>
            <div className='container mt-16 max-w-[95%] mx-auto'>
              <h3 className='font-bold text-2xl text-primary my-5 mx-auto'>
                Xe hết hạn đăng kiểm trong 30 ngày tới
              </h3>
              <ExpiredCars />
            </div>
            <div className='container mt-16 max-w-[95%] mx-auto'>
              <h3 className='font-bold text-2xl text-primary my-5 mx-auto'>
                Dự báo đăng kiểm mới
              </h3>
              <NextMonthPrediction />
            </div>
          </div>

          <div className='divider'></div>

          {/* Quản lý ô tô*/}
          <div
            id='ManageCars'
            className='p-8 pt-6 bg-base-100 w-full min-h-screen'
          >
            <h2 className='font-bold text-3xl text-primary mx-10'>
              Quản lý ô tô
            </h2>
            <div className='container mt-16 max-w-[95%] mx-auto'>
              <h3 className='font-bold text-2xl text-primary my-5 mx-auto'>
                Danh sách xe đã cấp biển số (chưa đăng kiểm)
              </h3>
              <Cars />
              <form className='flex flex-row gap-5 my-10 items-center container mx-auto'>
                <label htmlFor="csv-file" className='text-lg font-semibold'>Upload file (.csv) để thêm danh sách xe: </label>
                <input name='csv-file' type="file" accept='.csv'
                  className='file file-input file-input-bordered file-input-sm'/>
                <button className='btn btn-sm btn-primary btn-outline' type='submit'>
                  Upload file
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}
