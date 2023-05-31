import Image from 'next/image'
import NavBar from './components/navbar/page'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Registry Total',
  description: 'Welcome to Registry Total',
};

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <NavBar />
      <div className='flex justify-center gap-5 sm:hidden py-5'>
        <a className="btn btn-outline btn-primary btn-sm">Tạo tài khoản</a>
        <a className="btn btn-primary btn-sm">Đăng nhập</a>
      </div>
      <div className='flex flex-col h-screen'>
        <div className='flex flex-col bg-base-100 w-full h-3/4 whitespace-nowrap grow sm:grid sm:grid-cols-2 sm:p-10'>
          <div className='text-center font-bold pt-28 uppercase sm:text-left sm:px-10 sm:pt-0 sm:my-auto'>
            <div className="text-5xl text-primary my-3 sm:text-6xl sm:my-5 lg:text-[5rem] font-1000">Hệ thống</div>
            <div className="text-2xl text-primary sm:text-3xl lg:text-5xl font-700">quản lý đăng kiểm</div>
          </div>
          <div className='relative h-1/2 sm:h-full'>
            <Image
              src="/car.svg"
              alt="A car picture"
              fill
              priority
              sizes="100vw"
              className="w-full top-0 left-0 object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
      <footer className="footer shrink p-5 bg-neutral text-neutral-content sm:px-10 sm:pb-10">
        <div>
          <div className='h-1 w-1/3 my-2 bg-neutral-content'></div>
          <p>
            INT3306 20 - Phát triển ứng dụng Web<br />
            Lê Hoàng Minh Hà - 21020621<br />
            Hoàng Thị Thu Hà - 21020189
          </p>
        </div>
      </footer>
    </div>
  )
}
