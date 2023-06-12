// Kiểm tra nhận dạng tổng quát

'use client'

import { useState } from "react"

export default function Khung() {
    const [check, setCheck] = useState(false)

    return (
        <div className="container mb-3 mx-auto p-3">
            <form method=" post flex flex-col mx-auto">

                <h2 className="font-bold text-lg mb-2 max-w-lg">2.1. Khung và các liên kết</h2>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">2.1.1. Tình trạng chung</div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Không đúng kiểu loại</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Nứt, gẫy, biến dạng, cong vênh ở mức nhận biết được bằng mắt</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Nứt, gẫy, biến dạng, cong vênh ở mức nhận biết được bằng mắt</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Mọt gỉ làm ảnh hưởng tới kết cấu</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg max-w-lg">2.1.2. Thiết bị bảo vệ thành bên và phía sau</div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Không đầy đủ, không đứng quy cách</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Lắp đặt không chắc chắn</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Nứt, gẫy, hư hỏng gây nguy hiểm</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg max-w-lg">2.1.3. Móc kéo</div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Không đúng kiểu loại, lắp đặt không chắc chắn, không cân đối trên khung</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Nứt, gãy, biến dạng, quá mòn</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Cóc, chốt hãm tự mở
                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Xích, cáp bảo hiểm (nếu có) lắp đặt không chắc chắn
                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Cóc, chốt hãm bị kẹt
                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>

                <h2 className="font-bold text-lg mb-2 max-w-lg">2.2. Thân vỏ, buồng lái, thùng hàng</h2>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg max-w-lg">2.2.1. Tình trạng chung</div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Không đúng kiểu loại, lắp đặt không chắc chắn, không cân đối trên khung</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Nứt, gãy, thủng, mục gỉ, rách, biến dạng</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Lọt khí từ động cơ, khí xả vào trong khoang xe, buồng lái</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg max-w-lg">
                        2.2.2. Dầm ngang, dầm dọc
                    </div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Không đầy đủ, lắp đặt không chắc chắn, không đúng vị trí</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Nứt, gãy, mục gỉ, biến dạng.</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg max-w-lg">2.2.3. Cửa, khóa cửa và tay nắm cửa</div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Không đầy đủ, lắp đặt không chắc chắn</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Bản lề, chốt bị mất, lỏng, hư hỏng</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Đóng, mở không nhẹ nhàng</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Khóa cửa, cửa tự mở, đóng không hết</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg max-w-lg">
                        2.2.4. Cơ cấu khóa, mở buồng lái; thùng xe; khoang hành lý; khóa hãm công-ten-nơ
                    </div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Không đầy đủ, lắp đặt không chắc chắn</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Khóa mở không nhẹ nhàng
                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Khóa tự mở</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Không có tác dụng</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg max-w-lg">
                        2.2.5. Sàn
                    </div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Lắp đặt không chắc chắn
                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Thủng, rách
                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg max-w-lg">
                        2.2.6. Ghế ngồi (kể cả ghế người lái), giường nằm
                    </div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Không đúng hồ sơ kỹ thuật, bố trí và kích thước ghế, giường không đúng quy định
                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Lắp đặt không chắc chắn
                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Cơ cấu điều chỉnh (nếu có) không có tác dụng
                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg"> Rách mặt đệm</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg max-w-lg">
                        2.2.7. Bậc lên xuống
                    </div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Không đầy đủ, lắp đặt không chắc chắn, nứt, gãy                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Mọt gỉ, thủng                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg max-w-lg">
                        2.2.8. Tay vịn, cột chống
                    </div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Không đầy đủ, lắp đặt không chắc chắn, nứt, gãy                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Mọt gỉ
                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg max-w-lg">
                        2.2.9. Giá để hàng, khoang hành lý
                    </div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Không đầy đủ, lắp đặt không chắc chắn, nứt, gãy                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Mọt gỉ, thủng, rách
                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                        Không chia khoang theo quy định
                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg max-w-lg">
                        2.2.10. Chắn bùn
                    </div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                            Không đầy đủ, lắp đặt không chắc chắn
                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">
                        Rách, thủng, mọt gỉ, vỡ
                        </span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>

                <h2 className="font-bold text-lg mb-2 max-w-lg">2.3. Mâm xoay, chốt kéo của ô tô đầu kéo, sơ mi rơ moóc và rơ moóc</h2>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">2.3.1. Tình trạng chung</div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg"> Không đúng kiểu loại, lắp đặt không chắc chắn</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Các chi tiết bị biến dạng, gãy, rạn nứt, quá mòn</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <div className="font-semibold text-lg max-w-lg">2.3.2. Sự làm việc</div>
                    <label className="label cursor-pointer flex flex-row gap-5">
                        <span className="label-text max-w-lg">Cơ cấu khóa mở chốt kéo không hoạt động đúng chức năng	</span>
                        <input type="checkbox" className="checkbox"
                            onChange={(e) => {
                                (e.target.checked) ? setCheck(true) : ({})
                            }}
                        />
                    </label>
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