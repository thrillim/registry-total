import Logo from "@/app/components/Logo/logo"
import Link from 'next/link'

export default function MainNav({
    className,
    centerId
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className="navbar bg-base-100 flex items-center shadow-lg sticky space-x-4 lg:space-x-6"
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn m-1 bg-none text-primary">
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h8m-8 6h16'
                            />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu
                    p-2 glass shadow bg-base-100 rounded-box w-max 
                    text-black text-md font-semibold">
                        <li><Link href={`/Center/${centerId}/dashboard#ManageReg`}>Quản lý đăng kiểm </Link></li>
                        <li><Link href={`/Center/${centerId}/dashboard#ManageCars`}>Quản lý ô tô</Link></li>
                        <li>
                            <details>
                                <summary>
                                    <Link href={`/Center/${centerId}/registry`}>Đăng kiểm xe</Link>
                                </summary>
                                <ul>
                                    <li><Link href={`/Center/${centerId}/registry`}>Kiểm tra nhận dạng tổng quát</Link></li>
                                    <li><Link href={`/Center/${centerId}/registry`}>Kiểm tra phần trên của phương tiện</Link></li>
                                    <li><Link href={`/Center/${centerId}/registry`}>Kiểm tra hiệu quả phanh và trượt ngang</Link></li>
                                    <li><Link href={`/Center/${centerId}/registry`}>Kiểm tra môi trường</Link></li>                                    
                                    <li><Link href={`/Center/${centerId}/registry`}>Kiểm tra phần dưới của phương tiện</Link></li>
                                </ul>
                            </details>
                            
                        </li>
                    </ul>
                </div>
                <a className='btn btn-ghost normal-case text-xl text-accent gap-2'>
                    <Logo />
                    <span className="max-sm:hidden">Registry Total</span>
                </a>
            </div>
            <div className="navbar-center">
                <h1 className="max-md:hidden text-2xl font-bold text-primary">Trung tâm đăng kiểm</h1>
            </div>
            <div className="navbar-end">
                <div className="btn btn-outline btn-accent btn-sm mx-2"><a href={`/Center/${centerId}/account`}>Tài khoản</a></div>
                <div className="btn btn-error btn-sm mx-2">Đăng xuất</div>
            </div>
        </nav>
    )
}