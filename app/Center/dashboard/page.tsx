import { Metadata } from "next";
import MainNav from "./main-nav";
import RegisterSummary from "./summary";
import Registers from "./regist-table";
import ExpiredCars from "./expired-table";
import NextMonthPrediction from "./prediction";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard của Trung tâm Đăng kiểm",
}

export default async function CenterDashboarḍ̣̣̣() {
    return (
        <>
            <div className="flex flex-col bg-white text-black">
                <div className='border-b z-50'>
                    <MainNav />
                </div>
                <div id="ManageReg" className='flex-1 space-y-4 p-8 mt-3 bg-base-100 w-full'>
                    <h2 className='font-bold text-3xl text-primary mx-10'>
                        Quản lý đăng kiểm
                    </h2>
                    <div className="flex flex-col gap-7">
                        <div className="container max-w-[90%] mx-auto">
                            <RegisterSummary />
                        </div>
                        <div className="container max-w-[90%] mx-auto">
                            <h3 className="font-bold text-2xl text-primary my-5 mx-auto">Bảng theo dõi Đăng kiểm</h3>
                            <Registers />
                        </div>
                        <div className="container max-w-[90%] mx-auto">
                            <h3 className="font-bold text-2xl text-primary my-5 mx-auto">Xe đã và sắp hết hạn đăng kiểm</h3>
                            <ExpiredCars />
                            <NextMonthPrediction />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}