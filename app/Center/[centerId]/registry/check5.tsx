// Kiểm tra phần dưới của phương tiện

'use client'

import { useState } from 'react';

export default function PhanDuoi() {
    const [checkedCount, setCheckedCount] = useState(0);
  const [result, setResult] = useState(false);

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setCheckedCount((prevCount) => (checked ? prevCount + 1 : prevCount - 1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Kiểm tra giá trị của checkedCount và xác định kết quả
    // const result = checkedCount > 0 ? false : true;
    setResult(checkedCount > 0 ? false : true);
    // save it to local localStorage
    localStorage.setItem(
      'check5',
      JSON.stringify(checkedCount > 0 ? false : true)
    );
    console.log('Kết quả:', result);
  };
    return (
        <details
      id='check1'
      tabIndex={0}
      className='collapse collapse-arrow  min-w-max max-w-lg border border-base-300 bg-base-100'
    >
      {result ? (
        <summary className='collapse-title text-xl font-semibold text-green-600'>
        5. Kiểm tra phần dưới của phương tiện
        </summary>
      ) : (
        <summary className='collapse-title text-xl font-semibold'>
        5. Kiểm tra phần dưới của phương tiện
        </summary>
      )}
      <div className='collapse-content'>
        <div className="container mb-3 mx-auto p-3">
            <form className="flex flex-col mx-auto" onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Khung và các liên kết
                    </div>
                    <label className='label cursor-pointer flex flex-row gap-5 items-start'>
            <span className='label-text max-w-md text-justify'>
              • Gia cường khung xe ngoài quy định.
            </span>
            <input
              type='checkbox'
              className='checkbox'
              onChange={handleCheckboxChange}
            />
          </label>

          <label className='label cursor-pointer flex flex-row gap-5 items-start'>
            <span className='label-text max-w-md text-justify'>
              • Nứt, gẫy, biến dạng, cong vênh. mọt gỉ ở mức nhận biết được bằng mắt.
            </span>
            <input
              type='checkbox'
              className='checkbox'
              onChange={handleCheckboxChange}
            />
          </label>

          <label className='label cursor-pointer flex flex-row gap-5 items-start'>
            <span className='label-text max-w-md text-justify'>
              • Các liên kết không chắc chắn.
            </span>
            <input
              type='checkbox'
              className='checkbox'
              onChange={handleCheckboxChange}
            />
          </label>
                </div>
                {/* <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Dây cáp, thanh kéo, cần đẩy, các liên kết
                    </div>
                    <CheckBox text={"Lắp đặt không chắc chắn"} />
                    <CheckBox text={"Rạn, nứt, biến dạng, có dấu vết cọ sát vào bộ phận khác của xe, gỉ"} />
                    <CheckBox text={"Thiếu chi tiết kẹp chặt và phòng lỏng đối với dẫn động phanh chính"} />
                    <CheckBox text={"Cáp bị đứt sợi, thắt nút, kẹt, chùng lỏng"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                    Bơm chân không, máy nén khí, bình chứa, các van an toàn, van xả nước
                    </div>
                    <CheckBox text={"Không đầy đủ, lắp đặt không chắc chắn"} />
                    <CheckBox text={"Áp suất giảm rõ rệt, nghe rõ tiếng rò khí"} />
                    <CheckBox text={"Bình chứa rạn, nứt, biến dạng, mọt gỉ"} />
                    <CheckBox text={"Các van an toàn, van xả nước, không có tác dụng"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Dây cáp, thanh kéo, cần đẩy, các liên kết
                    </div>
                    <CheckBox text={"Không đúng kiểu loại, lắp đặt không đúng vị trí, không chắc chắn"} />
                    <CheckBox text={"Có dấu vết cọ sát vào bộ phận khác của xe"} />
                    <CheckBox text={"Rạn, nứt, biến dạng, quá mòn, gỉ"} />
                    <CheckBox text={"Thiếu chi tiết kẹp chặt và phòng lỏng"} />
                    <CheckBox text={"Cáp bị đứt sợi, thắt nút, kẹt, chùng lỏng"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Cơ cấu lái: tình trạng chung
                    </div>
                    <CheckBox text={"hông đúng kiểu loại, lắp đặt không chắc chắn"} />
                    <CheckBox text={"Không đầy đủ, hư hỏng chi tiết lắp ghép, phòng lỏng"} />
                    <CheckBox text={"Không đầy đủ, rách, vỡ cao su chắn bụi"} />
                    <CheckBox text={"Nứt, vỡ"} />
                    <CheckBox text={"Chảy dầu thành giọt"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                    Thanh và đòn dẫn động lái</div>
                    <CheckBox text={"Không đúng kiểu loại"} />
                    <CheckBox text={"Không đầy đủ, hư hỏng chi tiết lắp ghép, phòng lỏng, lắp đặt không chắc chắn"} />
                    <CheckBox text={"Lắp đặt không chắc chắn, không đầy đủ hay hư hỏng chi tiết kẹp chặt và phòng lỏng"} />
                    <CheckBox text={"Có dấu vết cọ sát vào bộ phận khác của xe"} />
                    <CheckBox text={"Nứt, gãy, biến dạng"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Trợ lực lái
                    </div>
                    <CheckBox text={"Không đúng kiểu loại, lắp đặt không chắc chắn"} />
                    <CheckBox text={"Rạn, nứt, biến dạng"} />
                    <CheckBox text={"Chảy dầu thành giọt, thiếu dầu trợ lực"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Hệ thống treo khí</div>
                    <CheckBox text={"Không đầy đủ, không đúng kiểu loại, lắp đặt không chắc chắn"} />
                    <CheckBox text={"Hư hỏng các bộ phận ảnh hưởng đến chức năng hệ thống"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                    Giảm chấn
                    </div>
                    <CheckBox text={"Không đầy đủ, lắp đặt không chắc chắn"} />
                    <CheckBox text={"Các chi tiết bị nứt, gẫy, biến dạng"} />
                    <CheckBox text={"Rò rỉ dầu, chi tiết cao su bị vỡ nát"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                    Hộp số
                    </div>
                    <CheckBox text={"Không đúng kiểu loại, lắp đặt không chắc chắn"} />
                    <CheckBox text={"Không đầy đủ, hư hỏng chi tiết lắp ghép, phòng lỏng"} />
                    <CheckBox text={"Chảy dầu thành giọt"} />
                    <CheckBox text={"Các chi tiết nứt, gãy, biến dạng"} />
                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                    Hệ thống dẫn khí xả, bầu giảm âm</div>
                    <CheckBox text={"Không đầy đủ, lắp đặt không chắc chắn"} />
                    <CheckBox text={"Mọt gỉ, rách, rò rỉ khí thải"} />
                </div> */}


                <div className="w-full mx-auto text-center">
                    <button
                        className="btn btn-primary btn-outline btn-sm mt-4"
                        type="submit">
                        Xác nhận
                    </button>
                </div>

            </form>
        </div>
        </div>
    </details>
    )
}