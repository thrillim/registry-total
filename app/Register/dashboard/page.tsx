import { Metadata } from "next";

import MainNav from './main-nav'

import { Center, columns } from "./columns";
import { DataTable } from "@/app/components/shadcn-ui/data-table";

export const metadata: Metadata = {
    title: "Cục Đăng kiểm Việt Nam",
    description: "Dashboard của Cục Đăng kiểm Việt Nam: Quản lý Trung tâm đăng kiểm, Cấp tài khoản Trun tâm đăn đăng kiểm, Quản lý đăng kiểm, Quản lý ô tô",
}

import AddCenterForm from "./center-form";
import AddAccountForm from "./account-form";

import RegisterSummary from "./summary";

async function fetchCenters(): Promise<Center[]> {
    // const res = await fetch("...")
    // const data = await res.json()
    return [
        {
            centerCode: "1101S",
            centerName: "TTDK XCG 1101S - Cao Bằng",
            centerProvince: "Cao Bằng",
            centerAddress: "Km4 - P. Sông Hiến - TP. Cao Bằng",
            hotline: "02063758742",
            email: "dangkiem1101S.kiemdinhoto.vn",
            status: "Hoạt động",
            manager: "Đinh Ngọc Hiến",
        },

    ]
}

export default async function RegisterDashboarḍ̣̣̣() {
    return (
        <>
            <div className="flex flex-col bg-white">
                <div className="border-b z-50">
                    <MainNav className="sticky top-0" />
                </div>

                {/* Trung tam dang kiem */}
                <div id='Center' className="flex-1 space-y-4 p-8 pt-8 bg-base-100 w-full min-h-screen max-h-screen">
                    <h2 className="font-bold text-3xl text-primary mx-10">Trung tâm Đăng kiểm</h2>
                    <div className="container mx-auto py-10 text-black max-h-[40rem]">
                        <DataTable columns={columns} data={await fetchCenters()} />
                    </div>
                    <div className="my-5 ml-10 btn btn-primary">
                        <a href="#AddCenter">Thêm mới</a>
                    </div>
                </div>

                <div className="divider "></div>

                {/* Them moi trung tam */}
                <div id="AddCenter" className="p-8 pt-6 bg-base-100 w-full h-screen">
                    <h2 className="font-bold text-3xl text-primary mx-10">Thêm Trung tâm đăng kiểm</h2>
                    <div className="container mx-auto py-10 text-black">
                        <AddCenterForm />
                    </div>
                </div>

                <div className="divider"></div>

                {/* Cấp tài khoản cho trung tâm đăng kiểm */}
                <div id="AddAccount" className="p-8 pt-6 bg-base-100 w-full h-screen">
                    <h2 className="font-bold text-3xl text-primary mx-10">Cấp tài khoản</h2>
                    <div className="container mx-auto py-10 text-black">
                        <AddAccountForm />
                    </div>
                </div>

                <div className="divider"></div>

                {/* Quản lý đăng kiểm */}
                <div id="ManageReg" className="p-8 pt-6 bg-base-100 w-full h-screen">
                    <h2 className="font-bold text-3xl text-primary mx-10">Quản lý đăng kiểm</h2>
                    <div className="container mx-auto py-5">
                        <RegisterSummary />
                    </div>
                </div>

                <div className="divider"></div>

                {/* Quản lý ô tô*/}
                <div id="ManageCars" className="p-8 pt-6 bg-base-100 w-full h-screen">
                    <h2 className="font-bold text-3xl text-primary mx-10">Quản lý ô tô</h2>
                    
                </div>
            </div>
        </>
    )
}