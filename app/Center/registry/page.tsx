import { Metadata } from "next"
import MainNav from "../main-nav"
import TongQuat from "./check1"
import DownloadCertificate from "./certificate"
import { SearchBar } from "./searchBar"

export const metadata: Metadata = {
    title: "Đăng kiểm xe",
    description: "Trang đăng kiểm xe của trung tâm đăng kiểm",
}

const check = {
    check1: true,
    check2: false,
    check3: false,
    check4: true,
    check5: false,
}

export default async function CarRegistry() {

    return (
        <div className="w-full min-h-screen bg-white text-black">
            <div className='border-b z-50'>
                <MainNav />
            </div>

            <div className="min-w-max max-w-md mx-auto my-10">
                <SearchBar />
            </div>

            <div className="container w-full min-w-max min-h-screen 
                my-20 mx-auto flex flex-col gap-10">

                <h2 className="font-bold text-3xl text-center text-primary">Kết quả kiểm tra</h2>

                <div id="check1" tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100">
                    {(check.check1) ? (
                        <h2 className='collapse-title text-xl font-semibold text-green-600'>
                            1. Kiểm tra nhận dạng tổng quát
                        </h2>)
                        : (
                            <h2 className='collapse-title text-xl font-semibold text-red-600'>
                                1. Kiểm tra nhận dạng tổng quát
                            </h2>
                        )
                    }
                    <TongQuat />
                </div>

                <div id="check2" tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100">
                    {(check.check2) ? (
                        <h2 className='collapse-title text-xl font-semibold text-green-600'>
                            2. Kiểm tra phần trên của phương tiện
                        </h2>)
                        : (
                            <h2 className='collapse-title text-xl font-semibold text-red-600'>
                                2. Kiểm tra phần trên của phương tiện
                            </h2>
                        )
                    }

                </div>

                <div id="check3" tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100">
                    {(check.check3) ? (
                        <h2 className='collapse-title text-xl font-semibold text-green-600'>
                            3. Kiểm tra hiệu quả phanh và trượt ngang
                        </h2>)
                        : (
                            <h2 className='collapse-title text-xl font-semibold text-red-600'>
                                3. Kiểm tra hiệu quả phanh và trượt ngang
                            </h2>
                        )
                    }

                </div>

                <div id="check4" tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100">
                    {(check.check4) ? (
                        <h2 className='collapse-title text-xl font-semibold text-green-600'>
                            4. Kiểm tra môi trường
                        </h2>)
                        : (
                            <h2 className='collapse-title text-xl font-semibold text-red-600'>
                                4. Kiểm tra môi trường
                            </h2>
                        )
                    }

                </div>

                <div id="check5" tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100">
                    {(check.check5) ? (
                        <h2 className='collapse-title text-xl font-semibold text-green-600'>
                            5. Kiểm tra phần dưới của phương tiện
                        </h2>)
                        : (
                            <h2 className='collapse-title text-xl font-semibold text-red-600'>
                                5. Kiểm tra phần dưới của phương tiện
                            </h2>
                        )
                    }

                </div>
                {(check.check1 && check.check2 && check.check3 && check.check4 && check.check5)
                    ?
                    (<div>
                        <span className="text-lg font-semibold text-green-400">Kiểm định thành công</span>
                        <DownloadCertificate />
                    </div>
                    )
                    : (
                        <div className="mx-auto flex flex-col gap-4">
                            <span className="text-lg font-semibold text-error">Kiểm định không thành công</span>
                            <div className="btn">In giấy hẹn lại</div>
                        </div>
                    )
                }

            </div>

        </div>
    )
}