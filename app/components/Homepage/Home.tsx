import Image from "next/image"
import NavBar from "./narbar"

export default function Homepage() {
    return (
        <div className="container mt-2 w-full mx-auto h-screen flex flex-col justify-between bg-white">
      <NavBar />
      <div className='flex justify-center gap-5 sm:hidden py-5'>
        <a className="btn btn-outline btn-primary btn-sm">Tạo tài khoản</a>
        <a className="btn btn-primary btn-sm">Đăng nhập</a>
      </div>
      <div className='flex h-screen'>
        <div className='flex flex-col flex-wrap bg-base-100 w-full h-3/4 whitespace-nowrap grow sm:grid sm:grid-cols-2 sm:p-10'>
          <div className='text-center font-bold pt-28 uppercase 
                max-lg:text-center max-lg:mx-auto
                lg:text-left lg:px-10 lg:pt-0 lg:my-auto'>
            <div className="text-5xl text-primary my-3 sm:text-6xl sm:my-5 lg:text-[5rem] font-1000">Hệ thống</div>
            <div className="text-2xl text-primary sm:text-3xl lg:text-5xl font-700">quản lý đăng kiểm</div>
          </div>
          <div className='container h-fit sm:h-full min-w-[480px]'>
            <div className="bg-car bg-contain bg-no-repeat bg-center w-full h-full"></div>
          </div>
        </div>
      </div>
    </div>
    )
}