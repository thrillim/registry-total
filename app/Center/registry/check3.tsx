// Kiểm tra hiệu quả phanh và trượt ngang

'use client'

import { CheckBox } from "./check_form"

export default function Phanh() {
    return (
        <div className="container mb-3 mx-auto p-3">
            <form method=" post flex flex-col mx-auto">

                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Trượt ngang của bánh xe dẫn hướng
                    </div>
                    <CheckBox text={"Không đầy đủ, lắp đặt không chắc chắnTrượt ngang của bánh dẫn hướng vượt quá 5 mm/m"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Sự làm việc của phanh chính
                    </div>
                    <CheckBox text={"Lực phanh không tác động trên một hay nhiều bánh xe"} />
                    <CheckBox text={"Lực phanh biến đổi bất thường"} />
                    <CheckBox text={"Chậm bất thường trong hoạt động của cơ cấu phanh ở bánh xe bất kỳ"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Sự làm việc và hiệu quả phanh đỗ
                    </div>
                    <CheckBox text={"Không có tác dụng phanh trên một bên bánh xe"} />
                    <CheckBox text={"Thử trên đường: quãng đường phanh lớn hơn 6 m"} />
                    <CheckBox text={"Thử trên mặt dốc 20%: phanh đỗ không giữ được xe đứng yên trên mặt dốc"} />
                    <CheckBox text={"Thử trên băng thử phanh: hiệu quả phanh đỗ nhỏ hơn 16%"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Phanh chậm dần bằng động cơ
                    </div>
                    <CheckBox text={"Hệ thống không hoạt động"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Hệ thống chống hãm cứng
                    </div>
                    <CheckBox text={"Thiết bị cảnh báo bị hư hỏng"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                    Phanh tự động sơ mi rơ moóc
                    </div>
                    <CheckBox text={"Phanh sơ mi rơ moóc không tự động tác động khi ngắt kết nối."} />
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