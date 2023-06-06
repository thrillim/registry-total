import NavBar from "./NavBar"

export default function Homepage() {
  return (
    <div className="container mt-2 w-full mx-auto h-screen flex flex-col justify-between bg-white">
      <NavBar />
      <div className='flex h-screen'>
        {/* screen width larger than 1024px */}
        <div className='flex flex-row gap-10 bg-base-100 w-screen mx-auto h-3/4 sm:p-10 max-lg:hidden'>
          <div className='self-start items-center basis-1/2
                my-auto pb-10
                uppercase text-left'>
            <div className="text-primary font-extrabold
                2xl:text-8xl 2xl:my-6
                xl:text-7xl xl:my-5
                lg:text-6xl lg:my-4"
                >Hệ thống</div>
            <div className="text-primary font-bold
                2xl:text-5xl 2xl:my-3
                xl:text-4xl xl:my-2
                lg:text-3xl lg:my-1"
                >quản lý đăng kiểm</div>
          </div>
          <div className='container h-fit sm:h-full min-w-[480px] w-1/2 self-end basis-1/2 my-auto pt-10 ml-18 mr-0'>
            <div className="bg-car bg-contain bg-no-repeat bg-center h-[30rem]"></div>
          </div>
        </div>
        {/* screen width smaller than 1024px */}
        <div className="lg:hidden w-screen h-screen min-w-max">
          <div className="mx-auto w-full uppercase text-center mt-10">
          <div className="text-primary font-extrabold
                md:text-6xl md:my-4
                sm:text-5xl sm:my-3
                max-sm:text-4xl max-sm:my-2"
                >Hệ thống</div>
            <div className="text-primary font-bold
                md:text-3xl md:my-2
                sm:text-2xl sm:my-1
                max-sm:text-xl max-sm:my-0
                "
                >quản lý đăng kiểm</div>
          </div>
          <div className='container h-fit sm:h-full min-w-[480px] w-1/2 my-auto mx-auto items-center'>
            <div className="bg-car bg-contain bg-no-repeat bg-center md:h-72 sm:h-56 max-sm:h-48"></div>
          </div>
        </div>
      </div>
    </div>
  )
}