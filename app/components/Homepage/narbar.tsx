
export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-md z-50">
      <div className="navbar-start">
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn btn-ghost text-base-100-info lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="current" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="dropdown-content menu mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Tin tức</a></li>
            <li><a>Hướng dẫn</a></li>
            <li><a>Giới thiệu</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost no-animation normal-case text-xl text-accent gap-2 lg:ml-[2rem]">
          <img src='logo.svg' alt='logo' width={25}/>
          Registry Total
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-secondary px-1">
          <li><a>Tin tức</a></li>
          <li><a>Hướng dẫn</a></li>
          <li><a>Giới thiệu</a></li>
        </ul>
      </div>
      <div className="hidden sm:flex navbar-end gap-1">
        <a className="btn btn-primary btn-sm md:btn-xl">Đăng nhập</a>
      </div>
    </div>
  )
}