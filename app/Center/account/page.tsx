import { Metadata } from "next"
import NavBar from "./navbar"
import CenterInfo from "./center-form"

export const metadata: Metadata = {
    title: 'Tài khoản',
    description: "Thông tin tài khoản Hệ thống đăng kiểm của Cục Đăng kiểm Việt Nam",
}

export default async function CenterAccount() {
    return (
        <>
            <div className="flex flex-col bg-white">
                <div className='border-b z-50'>
                    <NavBar />
                </div>
                <div className="container my-5 pt-5">
                    <h2 className="text-3xl font-bold text-center text-primary">Tổng quan tài khoản</h2>
                    <div className="container mx-auto mt-5">
                        <CenterInfo />
                    </div>
                </div>
            </div>
        </>
    )
}