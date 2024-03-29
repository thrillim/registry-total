'use client';

import React, { useRef, useState } from 'react';
import tinh_tp from '@/public/tinh_tp.json';

// get provinces from json file
let provinces: string[] = [];
for (let i = 0; i < tinh_tp.tinh.length; i++) {
  provinces.push(tinh_tp.tinh[i].name);
}

export default function AddCenterForm() {
  const centerCode = useRef();
  const centerName = useRef();
  const hotline = useRef();
  const email = useRef();
  const centerProvince = useRef();
  const address = useRef();
  const manager = useRef();
  const state = useRef();
  const [showError, setShowError] = useState(false);
  const [createError, setCreateError] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);


  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      !centerCode.current ||
      !centerName.current ||
      !hotline.current ||
      !email.current ||
      !centerProvince.current ||
      !address.current ||
      !state.current
    ) {
      setShowError(true);
      return false;
    } else {
      setShowError(false);
      const data = fetch('/api/createCenter', {
        method: 'POST',
        body: JSON.stringify({
          centerCode: centerCode.current,
          centerName: centerName.current,
          centerAddress: address.current,
          centerHotline: hotline.current,
          centerEmail: email.current,
          centerManager: manager.current,
          centerStatus: !!+state.current,
          centerProvince: centerProvince.current,
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      }).then((response) => response.json())
      .then((data) => {
        if (!data.centerId) {
            setCreateError(true)
            setCreateSuccess(false)
          } else {
            setCreateSuccess(true)
            setCreateError(false)
          }
      });
    }
  };

  return (
    <>
      <div className='card container mx-auto w-max bg-base-100 shadow-xl card-bordered'>
        <form className='card-body mx-auto px-10 py-7'>
          <div className='container flex flex-row gap-20'>
            <div className='flex flex-col gap-3'>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text font-bold text-lg'>
                    Mã trung tâm
                  </span>
                  <span className='label-text-alt text-red-700 text-lg font-bold'>
                    *
                  </span>
                </label>
                <input
                  type='text'
                  placeholder='Mã trung tâm'
                  autoComplete='username'
                  required
                  minLength={4}
                  maxLength={10}
                  className='input input-bordered w-full max-w-xs text-black'
                  onChange={(e) => (centerCode.current = e.target.value)}
                />
              </div>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text font-bold text-lg'>
                    Tên trung tâm
                  </span>
                  <span className='label-text-alt text-red-700 text-lg font-bold'>
                    *
                  </span>
                </label>
                <input
                  type='text'
                  placeholder='Tên trung tâm'
                  autoComplete='organization'
                  required
                  minLength={6}
                  className='input input-bordered w-full max-w-xs text-black'
                  onChange={(e) => (centerName.current = e.target.value)}
                />
              </div>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text font-bold text-lg'>
                    Số điện thoại
                  </span>
                  <span className='label-text-alt text-red-700 text-lg font-bold'>
                    *
                  </span>
                </label>
                <input
                  type='text'
                  placeholder='Hotline'
                  autoComplete='phone'
                  required
                  pattern='[0-9]{8,12}'
                  className='input input-bordered w-full max-w-xs text-black'
                  onChange={(e) => (hotline.current = e.target.value)}
                />
              </div>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text font-bold text-lg'>Email</span>
                  <span className='label-text-alt text-red-700 text-lg font-bold'>
                    *
                  </span>
                </label>
                <input
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                  required
                  className='input input-bordered w-full max-w-xs text-black'
                  onChange={(e) => (email.current = e.target.value)}
                />
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text font-bold text-lg'>
                    Tỉnh/Thành phố
                  </span>
                  <span className='label-text-alt text-red-700 text-lg font-bold'>
                    *
                  </span>
                </label>

                <select
                  name='city'
                  id='center-city'
                  required
                  className='select select-bordered'
                  onChange={(e) => (centerProvince.current = e.target.value)}
                  defaultValue={'DEFAULT'}
                >
                  <option
                    key={'none'}
                    value={'DEFAULT'}
                    disabled
                    className='text-gray-700 font-light'
                  >
                    Chọn tỉnh/thành phố
                  </option>
                  {provinces.map((province) => (
                    <option
                      key={province}
                      value={province}
                    >
                      {province}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text font-bold text-lg'>Địa chỉ</span>
                  <span className='label-text-alt text-red-700 text-lg font-bold'>
                    *
                  </span>
                </label>
                <input
                  type='text'
                  placeholder='Địa chỉ'
                  autoComplete='address'
                  required
                  className='input input-bordered w-full max-w-xs text-black'
                  onChange={(e) => (address.current = e.target.value)}
                />
              </div>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text font-bold text-lg'>Quản lý</span>
                  <span className='label-text-alt text-red-700 text-lg font-bold'>
                    *
                  </span>
                </label>
                <input
                  type='text'
                  placeholder='Tên nhân viên quản lý'
                  autoComplete='name'
                  autoCapitalize='true'
                  className='input input-bordered w-full max-w-xs text-black'
                  onChange={(e) => (manager.current = e.target.value)}
                />
              </div>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text font-bold text-lg'>
                    Trạng thái hoạt động
                  </span>
                  <span className='label-text-alt text-red-700 text-lg font-bold'>
                    *
                  </span>
                </label>
                <select
                  name='status'
                  id='status'
                  className='select select-bordered'
                  onChange={(e) => (state.current = e.target.value)}
                  defaultValue={'DEFAULT'}
                >
                  <option
                    key={'none'}
                    value={'DEFAULT'}
                    disabled
                    className='text-gray-700 font-light'
                  >
                    Chọn trạng thái
                  </option>
                  <option
                    key='active'
                    value='1'
                  >
                    Hoạt động
                  </option>
                  <option
                    key='inactive'
                    value='0'
                  >
                    Dừng/chưa hoạt động
                  </option>
                </select>
              </div>
            </div>
          </div>
          {showError && (
                            <label className='label'>
                                <span className='label-text text-error'>
                                    Hãy điền đủ tất cả các trường
                                </span>
                            </label>
                        )}
          {createError && (
                            <label className='label'>
                                <span className='label-text text-error'>
                                    Thêm không thành công do mã đã được sử dụng hoặc có trường không hợp lệ.
                                </span>
                            </label>
                        )}
          {createSuccess && (
                            <label className='label'>
                                <span className='label-text text-teal-600'>
                                    Thêm trung tâm thành công!
                                </span>
                            </label>
                        )}
          <div className='flex flex-row gap-4 mx-auto my-4'>
            <button
              className='btn btn-outline btn-neutral'
              type='reset'
              onClick={()=>{
                setShowError(false);
                setCreateError(false);
                setCreateSuccess(false)}
              }
            >
              Hủy bỏ
            </button>
            <button
              className='btn btn-primary'
              type='submit'
              onClick={onSubmit}
            >
              Thêm mới
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
