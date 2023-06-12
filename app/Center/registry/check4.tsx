// Kiểm tra môi trường

'use client'

import { CheckBox } from "./check_form"

export default function MoiTruong() {
    return (
        <div className="container mb-3 mx-auto p-3">
            <form method=" post flex flex-col mx-auto">

                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Độ ồn: độ ồn ngoài
                    </div>
                    <CheckBox text={"Độ ồn trung bình sau khi đã hiệu chỉnh vượt quá các giới hạn cho phép"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Còi
                    </div>
                    <CheckBox text={"Không có hoặc không đúng kiểu loại"} />
                    <CheckBox text={"Âm thanh phát ra không liên tục, âm lượng không ổn định"} />
                    <CheckBox text={"Điều khiển hư hỏng, không điều khiển dễ dàng, lắp đặt không đúng vị trí"} />
                    <CheckBox text={" Âm lượng nhỏ hơn 93 dB(A)"} />
                    <CheckBox text={" Âm lượng lớn hơn 112 dB(A)"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Khí thải động cơ cháy cưỡng bức
                    </div>
                    <CheckBox text={"Nồng độ CO lớn hơn 4,5 % thể tích đối với các xe sản xuất trước năm 1999 hoặc lớn hơn 3,5 % thể tích đối với các xe sản xuất từ năm 1999 trở về sau"} />
                    <CheckBox text={"Số vòng quay không tải của động cơ không nằm trong phạm vi quy định của nhà sản xuất hoặc lớn hơn 1000 vòng/phút."} />
                    <CheckBox text={"Nồng độ HC (C6H14 hoặc tương đương) lớn hơn ngưỡng cho phép"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Khí thải động cơ cháy do nén - Độ khói của khí thải
                    </div>
                    <CheckBox text={"Chiều rộng dải đo khói chênh lệch giữa giá trị đo lớn nhất và nhỏ nhất vượt quá 10% HSU"} />
                    <CheckBox text={"Kết quả đo khói trung bình của 3 lần đo lớn hơn 72% HSU đối với các xe sản xuất trước năm 1999 hoặc lớn hơn 60% HSU thể tích đối với các xe sản xuất từ năm 1999 trở về sau"} />
                    <CheckBox text={"Giá trị số vòng quay không tải của động cơ không nằm trong phạm vi quy định của nhà sản xuất hoặc lớn hơn 1000 vòng/phút"} />
                    <CheckBox text={"Thời gian tăng tốc từ số vòng quay nhỏ nhất đến lớn nhất vượt quá 5 giây. đ) Giá trị số vòng quay lớn nhất của động cơ nhỏ hơn 90% số vòng quay ứng với công suất cực đại theo quy định của nhà sản xuất, trừ trường hợp đặc biệt (theo thiết kế của nhà sản xuất khống chế tốc độ vòng quay không tải lớn nhất ở giá trị nhỏ hơn 90% tốc độ vòng quay ứng với công suất cực đại)"} />
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