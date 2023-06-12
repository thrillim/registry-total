// Kiểm tra nhận dạng tổng quát

'use client'

import { useState } from "react"
import { CheckBox } from "./check_form"

export default function TongQuat() {
    return (
        <div className="container mb-3 mx-auto p-3">
            <form method="post flex flex-col mx-auto">
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Biển số đăng ký
                    </div>
                    <CheckBox text={"Không đủ số lượng"} />
                    <CheckBox text={"Lắp đặt không chắc chắn; màu nền biển số khác với ký hiệu nền màu biển số ghi trên Giấy đăng ký xe."} />
                    <CheckBox text={"Không đúng quy cách; các chữ, số không rõ ràng, không đúng với Giấy đăng ký xe."} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Số khung
                    </div>
                    <CheckBox text={"Không đầy đủ, không đúng vị trí;"} />
                    <CheckBox text={"Sửa chữa, tẩy xoá;"} />
                    <CheckBox text={"Các chữ, số không rõ, không đúng với hồ sơ phương tiện."} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                    Màu sơn
                    </div>
                    <CheckBox text={"Không đúng màu sơn ghi trong Giấy đăng ký xe."} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Kiểu loại, kích thước xe
                    </div>
                    <CheckBox text={"Biểu trưng; thông tin kẻ trên cửa xe, thành xe theo quy định"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                    Bơm chân không, máy nén khí, bình chứa, các van an toàn, van xả nước
                    </div>
                    <CheckBox text={"Không đầy đủ, không đúng kiểu loại, lắp đặt không đúng, không chắc chắn."} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                    Bánh xe</div>
                    <CheckBox text={"Không đầy đủ, không đúng thông số của lốp do nhà sản xuất xe cơ giới quy định, tài liệu kỹ thuật."} />
                    <CheckBox text={"Vành, đĩa vành rạn, nứt, cong vênh"} />
                    <CheckBox text={"Lắp đặt không chắc chắn, không đầy đủ hay hư hỏng chi tiết kẹp chặt và phòng lỏng."} />
                    <CheckBox text={"Lốp nứt, vỡ, phồng rộp làm hở lớp sợi mành."} />
                    <CheckBox text={"Lốp bánh dẫn hướng hai bên không cùng kiểu hoa lốp, chiều cao hoa lốp không đồng đều, sử dụng lốp đắp."} />
                    <CheckBox text={"Lốp mòn đến dấu chỉ báo độ mòn của nhà sản xuất."} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Giá lắp và bánh xe dự phòng
                    </div>
                    <CheckBox text={"Giá lắp nứt gãy, không chắc chắn"} />
                    <CheckBox text={"Bánh xe dự phòng gá lắp không an toàn"} />
                    <CheckBox text={"Bánh xe dự phòng không đầy đủ; nứt vỡ, phồng, rộp, mòn đến dấu chỉ báo của nhà sản xuất"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                    Thiết bị bảo vệ thành bên và phía sau</div>
                    <CheckBox text={"Không đầy đủ, lắp đặt không chắc chắn."} />
                    <CheckBox text={"Nứt, gẫy, hư hỏng"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                    Chắn bùn
                    </div>
                    <CheckBox text={"Không đầy đủ, lắp đặt không chắc chắn."} />
                    <CheckBox text={" Rách, thủng, mọt gỉ, vỡ"} />
                </div>


                <div className="w-full mx-auto text-center">
                    <button
                        className="btn btn-primary btn-outline btn-sm mt-4"
                        type="submit">
                        Xác nhận
                    </button>
                </div>

            </form>
        </div>
    )
}