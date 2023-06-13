'use client';

import Logo from "@/app/components/Logo/logo"
import Link from "next/link"
import { useSession, signIn, signOut } from 'next-auth/react';

export default function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const { data: session } = useSession();
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
                        <li><a href="#Center">Trung tâm đăng kiểm</a></li>
                        <li><a href="#AddAccount">Cấp tài khoản </a></li>
                        <li><a href="#ManageReg">Quản lý đăng kiểm </a></li>
                        <li><a href="#ManageCars">Quản lý ô tô </a></li>
                    </ul>
                </div>
                <Link className='btn btn-ghost normal-case text-xl text-accent gap-2' href={"/"}>
                    <Logo />
                    <span className="max-sm:hidden">Registry Total</span>
                </Link>
            </div>
            <div className="navbar-center">
                <h1 className="max-md:hidden text-2xl font-bold text-primary">Cục Đăng kiểm Việt Nam</h1>
            </div>
            <div className="navbar-end">
            <button
          className='btn btn-sm btn-error'
          onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
        >
          Đăng xuất
        </button>
            </div>
        </nav>
    )
}