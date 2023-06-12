// Kiểm tra nhận dạng tổng quát

'use client'

import { useState } from "react"

export default function TongQuat() {
    const [check, setCheck] = useState(false)

    return (
        <div className="container mb-3 mx-auto p-3">
            <form method="post flex flex-col mx-auto">
                <div className="form-control">
                    <div className="font-semibold text-lg">1.1. Biển số đăng ký</div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text">Không đủ số lượng</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text">Lắp đặt không chắc chắn</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text">Không đúng quy cách; các chữ, số không rõ ràng, không đúng với Giấy đăng ký xe</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg">1.2. Số khung, Số động cơ</div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text">Không đầy đủ, không đúng vị trí</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text">Sửa chữa, tẩy xóa</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text">Các chữ, số không rõ, không đúng với hồ sơ phương tiện</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg">1.3. Mầu sơn</div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text">Không đúng mầu sơn ghi trong Giấy đăng ký xe</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg">1.4. Kiểu loại; kích thước xe, thùng hàng</div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text">Không đúng với hồ sơ kỹ thuật</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg">1.5. Biểu trưng; thông tin kẻ trên cửa xe, thành xe theo quy định	</div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text">Không có theo quy định</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text">Không chính xác, không đầy đủ thông tin theo quy định</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text">Mờ, không nhìn rõ</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <button 
                    className="btn btn-primary btn-sm mt-4 self-center" 
                    type="submit">
                        Xác nhận
                </button>
            </form>
        </div>
    )
}