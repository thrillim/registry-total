import { Metadata } from "next"
import NavBar from "./navbar"

export const metadata: Metadata = {
    title: 'Tài khoản',
    description: "Thông tin tài khoản Hệ thống đăng kiểm của Cục Đăng kiểm Việt Nam",
}

export default async function RegisterAccount() {
    return (
        <>
            <div className="flex flex-col bg-white">
                <div className='border-b z-50'>
                    <NavBar />
                </div>
                <div className="container m-5 pt-5">
                    <h2 className="text-3xl font-bold text-center text-primary">Tổng quan tài khoản</h2>
                </div>
            </div>
        </>
    )
}