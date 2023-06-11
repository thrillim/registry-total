import { Metadata } from "next"
import MainNav from "../main-nav"

export const metadata: Metadata = {
    title: "Đăng kiểm xe",
    description: "Trang đăng kiểm xe của trung tâm đăng kiểm",
}

export default async function CarRegistry() {
    return (
        <div className="w-full min-h-screen bg-white text-black">
            <div className='border-b z-50'>
                    <MainNav />
                </div>
        </div>
    )
}