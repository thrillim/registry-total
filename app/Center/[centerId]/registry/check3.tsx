'use client'
// Kiểm tra hiệu quả phanh và trượt ngang


import { useState } from 'react';

export default function Phanh() {
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
    localStorage.setItem('check3', JSON.stringify(checkedCount > 0 ? false : true));
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
        3. Kiểm tra hiệu quả phanh và trượt ngang
        </summary>
      ) : (
        <summary className='collapse-title text-xl font-semibold'>
        3. Kiểm tra hiệu quả phanh và trượt ngang
        </summary>
      )}
      <div className='collapse-content'>
        <div className="container mb-3 mx-auto p-3">
            <form className="flex flex-col mx-auto" onSubmit={handleSubmit}>

                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Trượt ngang của bánh xe dẫn hướng
                    </div>
                    <label className='label cursor-pointer flex flex-row gap-5 items-start'>
            <span className='label-text max-w-md text-justify'>
              • Không đầy đủ, lắp đặt không chắc chắnTrượt ngang của bánh dẫn hướng vượt quá 5 mm/m.
            </span>
            <input
              type='checkbox'
              className='checkbox'
              onChange={handleCheckboxChange}
            />
          </label>

                </div>
                <div className="form-control">
                    <div className="font-semibold text-lg max-w-lg">
                        Sự làm việc của phanh chính
                    </div>
                    <label className='label cursor-pointer flex flex-row gap-5 items-start'>
            <span className='label-text max-w-md text-justify'>
              • Lực phanh không tác động trên một hay nhiều bánh xe.
            </span>
            <input
              type='checkbox'
              className='checkbox'
              onChange={handleCheckboxChange}
            />
          </label>

          <label className='label cursor-pointer flex flex-row gap-5 items-start'>
            <span className='label-text max-w-md text-justify'>
              • Lực phanh biến đổi bất thường.
            </span>
            <input
              type='checkbox'
              className='checkbox'
              onChange={handleCheckboxChange}
            />
          </label>

          <label className='label cursor-pointer flex flex-row gap-5 items-start'>
            <span className='label-text max-w-md text-justify'>
              • Chậm bất thường trong hoạt động của cơ cấu phanh ở bánh xe bất kỳ.
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