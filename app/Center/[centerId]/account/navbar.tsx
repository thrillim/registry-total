import Logo from "@/app/components/Logo/logo"
import Link from 'next/link'

export default function NavBar({
    className,
    centerId
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className="navbar bg-base-100 flex items-center shadow-lg sticky space-x-4 lg:space-x-6"
        >
            <div className="navbar-start">
                <Link className='btn btn-ghost normal-case text-xl text-accent gap-2' 
                    href="/">
                    <Logo />
                    <span className="max-sm:hidden">Registry Total</span>
                </Link>
            </div>
            <div className="navbar-center">
                <h1 className="max-md:hidden text-2xl font-bold text-primary">Trung tâm Đăng kiểm xe</h1>
            </div>
            <div className="navbar-end">
                <div className="btn btn-outline btn-primary btn-sm mx-2"><a href={`/Center/${centerId}/dashboard`}>Dashboard</a></div>
                <div className="btn btn-error btn-sm mx-2">Đăng xuất</div>
            </div>
        </nav>
    )
}