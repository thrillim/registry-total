import { Metadata } from "next"
import MainNav from "../main-nav"
import TongQuat from "./check1"
import DownloadCertificate from "./certificate"
import { SearchBar } from "./searchBar"
import PhanTren from "./check2"
import Phanh from "./check3"
import MoiTruong from "./check4"

export const metadata: Metadata = {
    title: "Đăng kiểm xe",
    description: "Trang đăng kiểm xe của trung tâm đăng kiểm",
}

const check = {
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
}

export default async function CarRegistry() {

    return (
        <div className="w-full min-h-screen bg-white text-black mx-auto">
            <div className='border-b z-50'>
                <MainNav />
            </div>

            <div className="min-w-max max-w-md mx-auto my-10">
                <SearchBar />
            </div>

            <div className="container w-full min-w-max min-h-screen 
                my-20 mx-auto flex flex-col gap-10 items-center">
                <h2 className="font-bold text-3xl text-center text-primary">Kết quả kiểm tra</h2>
                
                <details id="check1" tabIndex={0}
                    className="collapse collapse-arrow  min-w-max max-w-lg border border-base-300 bg-base-100">
                    {(check.check1) ? (
                        <summary className='collapse-title text-xl font-semibold text-green-600'>
                            1. Kiểm tra nhận dạng, tổng quát
                        </summary >)
                        : (
                            <summary className='collapse-title text-xl font-semibold text-red-600'>
                                1. Kiểm tra nhận dạng, tổng quát
                            </summary>
                        )
                    }
                    <div className="collapse-content">
                        <TongQuat />
                    </div>
                </details >

                <details id="check2" tabIndex={0}
                    className="collapse collapse-arrow  min-w-max max-w-lg border border-base-300 bg-base-100">
                    {(check.check1) ? (
                        <summary className='collapse-title text-xl font-semibold text-green-600'>
                            2. Kiểm tra phần trên của phương tiện
                        </summary >)
                        : (
                            <summary className='collapse-title text-xl font-semibold text-red-600'>
                                2. Kiểm tra phần trên của phương tiện
                            </summary>
                        )
                    }
                    <div className="collapse-content">
                        <PhanTren />
                    </div>
                </details >

                <details id="check3" tabIndex={0}
                    className="collapse collapse-arrow  min-w-max max-w-lg border border-base-300 bg-base-100">
                    {(check.check1) ? (
                        <summary className='collapse-title text-xl font-semibold text-green-600'>
                            3. Kiểm tra hiệu quả phanh và trượt ngang
                        </summary >)
                        : (
                            <summary className='collapse-title text-xl font-semibold text-red-600'>
                                3. Kiểm tra hiệu quả phanh và trượt ngang
                            </summary>
                        )
                    }
                    <div className="collapse-content">
                        <Phanh />
                    </div>
                </details >

                <details id="check34" tabIndex={0}
                    className="collapse collapse-arrow  min-w-max max-w-lg border border-base-300 bg-base-100">
                    {(check.check1) ? (
                        <summary className='collapse-title text-xl font-semibold text-green-600'>
                            4. Kiểm tra môi trường
                        </summary >)
                        : (
                            <summary className='collapse-title text-xl font-semibold text-red-600'>
                                4. Kiểm tra môi trường
                            </summary>
                        )
                    }
                    <div className="collapse-content">
                        <MoiTruong />
                    </div>
                </details >

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