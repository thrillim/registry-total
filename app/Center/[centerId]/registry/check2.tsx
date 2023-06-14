'use client';

// Kiểm tra Phần trên

import { useState } from 'react';

export default function PhanTren() {
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
      'check2',
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
          2. Kiểm tra phần trên của phương tiện
        </summary>
      ) : (
        <summary className='collapse-title text-xl font-semibold'>
          2. Kiểm tra phần trên của phương tiện
        </summary>
      )}
      <div className='collapse-content'>
        <div className='container mb-3 mx-auto p-3'>
          <form
            className='flex flex-col mx-auto'
            onSubmit={handleSubmit}
          >
            <div className='form-control'>
              <div className='font-semibold text-lg max-w-lg'>
                Kính chắn gió
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
                  • Vỡ, rạn nứt ảnh hưởng đến tầm nhìn người lái.
                </span>
                <input
                  type='checkbox'
                  className='checkbox'
                  onChange={handleCheckboxChange}
                />
              </label>

              <label className='label cursor-pointer flex flex-row gap-5 items-start'>
                <span className='label-text max-w-md text-justify'>
                  • Hình ảnh quan sát bị méo, không rõ.
                </span>
                <input
                  type='checkbox'
                  className='checkbox'
                  onChange={handleCheckboxChange}
                />
              </label>
            </div>
            {/* <div className='form-control'>
              <div className='font-semibold text-lg max-w-lg'>
                Gương, camera quan sát phía sau
              </div>
              <CheckBox text={'Không đầy đủ, lắp đặt không chắc chắn'} />
              <CheckBox
                text={
                  'Phía bên trái không quan sát được ít nhất chiều rộng 2,5 m ở vị trí cách gương 10 m về phía sau'
                }
              />
              <CheckBox
                text={
                  'Phía bên phải của xe con, xe tải có khối lượng toàn bộ không lớn hơn 2 tấn không quan sát được ít nhất chiều rộng 4 m ở vị trí cách gương 20 m về phía sau; đối với các loại xe khác không quan sát được ít nhất chiều rộng 3,5m ở vị trí cách gương 30 m về phía sau'
                }
              />
              <CheckBox text={'Hình ảnh quan sát bị méo, không rõ'} />
              <CheckBox text={'Nứt, vỡ, hư hỏng không điều chỉnh được'} />
            </div>
            <div className='form-control'>
              <div className='font-semibold text-lg max-w-lg'>
                Thiết bị giám sát hành trình
              </div>
              <CheckBox text={'Không truy cập được'} />
              <CheckBox
                text={
                  'Hiển thị sai thông tin của xe cơ giới trên trang thông tin điện tử'
                }
              />
            </div>
            <div className='form-control'>
              <div className='font-semibold text-lg max-w-lg'>Vô lăng lái</div>
              <CheckBox text={'Lắp đặt không chắc chắn'} />
              <CheckBox
                text={
                  'Có sự dịch chuyển tương đối giữa vô lăng lái và trục lái'
                }
              />
              <CheckBox text={'Vô lăng lái, bị nứt, gãy, biến dạng'} />
            </div>
            <div className='form-control'>
              <div className='font-semibold text-lg max-w-lg'>
                Trụ lái và trục lái
              </div>
              <CheckBox text={'Lắp đặt không chắc chắn'} />
              <CheckBox text={'Trục lái rơ dọc, rơ ngang'} />
              <CheckBox text={'Nứt, gãy, biến dạng'} />
              <CheckBox
                text={
                  'Cơ cấu thay đổi độ nghiêng không đảm bảo khóa vị trí chắc chắn'
                }
              />
            </div>
            <div className='form-control'>
              <div className='font-semibold text-lg max-w-lg'>
                Trục bàn đạp phanh
              </div>
              <CheckBox text={'Không đủ chi tiết lắp ghép, phòng lỏng'} />
              <CheckBox text={'Trục xoay quá chặt, kẹt'} />
              <CheckBox text={'Ổ đỡ, trục rơ'} />
            </div>
            <div className='form-control'>
              <div className='font-semibold text-lg max-w-lg'>
                Van phanh, nút bấm điều khiển phanh đỗ xe
              </div>
              <CheckBox
                text={'Không đúng kiểu loại, lắp đặt không chắc chắn'}
              />
              <CheckBox text={'Bộ phận điều khiển nứt, hỏng'} />
              <CheckBox
                text={
                  'Van điều khiển làm việc sai chức năng, không ổn định; các mối liên kết lỏng, có sự rò rỉ trong hệ thống'
                }
              />
              <CheckBox text={'Không có tín hiệu khi đóng mở nút bấm'} />
            </div>
            <div className='form-control'>
              <div className='font-semibold text-lg max-w-lg'>
                Ghế người lái, ghế ngồi
              </div>
              <CheckBox
                text={
                  'Số người cho phép chở không đúng hồ sơ kỹ thuật, bố trí và kích thước ghế, giường không đúng quy định'
                }
              />
              <CheckBox text={'Lắp đặt không chắc chắn'} />
              <CheckBox text={'Cơ cấu điều chỉnh (nếu có) không có tác dụng'} />
              <CheckBox text={'Rách mặt đệm ghế'} />
            </div>
            <div className='form-control'>
              <div className='font-semibold text-lg max-w-lg'>
                Dây đai an toàn
              </div>
              <CheckBox
                text={'Không đầy đủ theo quy định, lắp đặt không chắc chắn'}
              />
              <CheckBox text={'Khóa cài đóng mở không nhẹ nhàng, tự mở'} />
              <CheckBox text={'Dây bị rách, đứt'} />
              <CheckBox text={'Dây bị kẹt, không kéo ra, thu vào được'} />
              <CheckBox
                text={'Cơ cấu hãm không giữ chặt dây khi giật dây đột ngột'}
              />
            </div>
            <div className='form-control'>
              <div className='font-semibold text-lg max-w-lg'>
                Cửa, khóa cửa và tay nắm cửa
              </div>
              <CheckBox text={'Không đầy đủ, lắp đặt không chắc chắn'} />
              <CheckBox text={'Bản lề, chốt bị mất, lỏng, hư hỏng'} />
              <CheckBox text={'Cửa tự mở, đóng không hết'} />
              <CheckBox text={'Đóng, mở không nhẹ nhàng'} />
            </div> */}

            <div className='w-full mx-auto text-center'>
              <button
                className='btn btn-primary btn-outline btn-sm mt-4'
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
