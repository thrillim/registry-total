'use client';

// Kiểm tra nhận dạng tổng quát

import { useState } from 'react';

export default function TongQuat() {
  const [checkedCount, setCheckedCount] = useState(0);
  const [result, setResult] = useState(false)

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setCheckedCount((prevCount) => (checked ? prevCount + 1 : prevCount - 1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Kiểm tra giá trị của checkedCount và xác định kết quả
    // const result = checkedCount > 0 ? false : true;
    setResult(checkedCount > 0 ? false : true)
    // save it to local localStorage
    localStorage.setItem('check1', JSON.stringify(checkedCount > 0 ? false : true));
    console.log('Kết quả:', result);
  };
  return (
    <details
        id='check1'
        tabIndex={0}
        className='collapse collapse-arrow  min-w-max max-w-lg border border-base-300 bg-base-100'
      >
        {(result) ? (
                    <summary className='collapse-title text-xl font-semibold text-green-600'>
                        1. Kiểm tra nhận dạng, tổng quát
                    </summary >)
                    : (
                        <summary className='collapse-title text-xl font-semibold'>
                            1. Kiểm tra nhận dạng, tổng quát
                        </summary>
                    )
                }
        <div className='collapse-content'>
            <div className='container mb-3 mx-auto p-3'>
            <form
                className='flex flex-col mx-auto'
                onSubmit={handleSubmit}
            >
                <div>
                <div className='font-semibold text-lg max-w-lg'>Biển số đăng ký</div>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Không đủ số lượng.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Lắp đặt không chắc chắn; màu nền biển số khác với ký hiệu nền
                    màu biển số ghi trên Giấy đăng ký xe.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Không đúng quy cách; các chữ, số không rõ ràng, không đúng với
                    Giấy đăng ký xe.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                </div>
                <div>
                <div className='font-semibold text-lg max-w-lg'>Số khung</div>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Không đầy đủ, không đúng vị trí;.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Các chữ, số không rõ, không đúng với hồ sơ phương tiện.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                </div>
                <div>
                <div className='font-semibold text-lg max-w-lg'>Màu sơn</div>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Không đúng màu sơn ghi trong Giấy đăng ký xe.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                </div>
                <div>
                <div className='font-semibold text-lg max-w-lg'>
                    Kiểu loại, kích thước xe
                </div>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Không đúng với hồ sơ kỹ thuật.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                </div>
                <div>
                <div className='font-semibold text-lg max-w-lg'>
                    Bơm chân không, máy nén khí, bình chứa, các van an toàn, van xả nước
                </div>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Không đầy đủ, không đúng kiểu loại, lắp đặt không đúng, không chắc chắn.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                </div>
                <div>
                <div className='font-semibold text-lg max-w-lg'>Bánh xe</div>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Không đầy đủ, không đúng thông số của lốp do nhà sản xuất xe cơ giới quy định, tài liệu kỹ thuật.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Vành, đĩa vành rạn, nứt, cong vênh.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Lắp đặt không chắc chắn, không đầy đủ hay hư hỏng chi tiết kẹp chặt và phòng lỏng.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Lốp nứt, vỡ, phồng rộp làm hở lớp sợi mành.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Lốp bánh dẫn hướng hai bên không cùng kiểu hoa lốp, chiều cao hoa lốp không đồng đều, sử dụng lốp đắp.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Lốp mòn đến dấu chỉ báo độ mòn của nhà sản xuất.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                </div>
                <div>
                <div className='font-semibold text-lg max-w-lg'>
                    Giá lắp và bánh xe dự phòng
                </div>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Giá lắp nứt gãy, không chắc chắn.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>

                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Bánh xe dự phòng gá lắp không an toàn.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Bánh xe dự phòng không đầy đủ; nứt vỡ, phồng, rộp, mòn đến dấu chỉ báo của nhà sản xuất.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                </div>
                <div>
                <div className='font-semibold text-lg max-w-lg'>
                    Thiết bị bảo vệ thành bên và phía sau
                </div>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Không đầy đủ, lắp đặt không chắc chắn.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Nứt, gẫy, hư hỏng.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                </div>
                <div>
                <div className='font-semibold text-lg max-w-lg'>Chắn bùn</div>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Không đầy đủ, lắp đặt không chắc chắn.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                    <span className='label-text max-w-md text-justify'>
                    • Rách, thủng, mọt gỉ, vỡ.
                    </span>
                    <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleCheckboxChange}
                    />
                </label>
                </div>

                <div className='w-full mx-auto text-center'>
                <button
                    className='btn btn-primary btn-sm mt-4'
                    type='submit'
                >
                    Xác nhận
                </button>
                </div>
            </form>
            </div>
        </div>
    </details>
  );
}
