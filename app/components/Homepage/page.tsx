import Image from "next/image"
import NavBar from "./navbar/page"

export default function Homepage() {
    return (
      <div className='container w-full h-screen flex flex-col justify-between p-[2rem] bg-white'>
        <NavBar />
        <div className='flex justify-center gap-5 sm:hidden py-5'>
          <a className='btn btn-outline btn-primary btn-sm'>Tạo tài khoản</a>
          <a className='btn btn-primary btn-sm'>Đăng nhập</a>
        </div>
        <div className='flex flex-col h-screen'>
          <div className='flex flex-col bg-base-100 w-full h-3/4 whitespace-nowrap grow sm:grid sm:grid-cols-2 sm:p-10'>
            <div className='text-center font-bold pt-28 uppercase sm:text-left sm:px-10 sm:pt-0 sm:my-auto'>
              <div className='text-5xl text-primary my-3 sm:text-6xl sm:my-5 lg:text-[5rem] font-1000'>
                Hệ thống
              </div>
              <div className='text-2xl text-primary sm:text-3xl lg:text-5xl font-700'>
                quản lý đăng kiểm
              </div>
            </div>
            <div className='relative h-1/2 sm:h-full'>
              <Image
                src='/car.svg'
                alt='A car picture'
                fill
                priority
                sizes='100vw'
                className='w-full top-0 left-0 object-contain rounded-2xl'
              />
            </div>
          </div>
        </div>
      </div>
    );
}