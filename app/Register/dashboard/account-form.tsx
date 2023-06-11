"use client"

import React, { useRef, useState, useCallback } from 'react';
import stations from '@/public/stations.json';

// get centers from json file
let centers: [[string, string]] = [['', '']];

for (let i = 0; i < stations.stations.length; i++) {
  centers.push([
    stations.stations[i].stationsName,
    stations.stations[i].stationCode,
  ]);
}

centers.shift();

export default function AddAccountForm() {
  const [centerCode, setCenterCode] = useState(centers[0][1]);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [showError, setShowError] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const formHandler = useCallback(
    () => (event: { preventDefault: () => void; }) => {
      event.preventDefault();

      const data = {
        centerCode: centerCode,
        username: usernameRef.current?.value,
        password: passwordRef.current?.value,
        // passwordConfirmation: passwordConfirmationInputElement.current?.value
      };

      console.log(data);
      // other send form logic here
      // ...
    },
    []
  );

  return (
    <>
      <div className='card card-bordered container mx-auto w-max bg-base-100 shadow-xl'>
        <form
          className='card-body flex flex-col gap-5 mx-auto px-10 py-10'
          onSubmit={formHandler()}
        >
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text font-bold text-lg'>
                Trung tâm đăng kiểm
              </span>
              <span className='label-text-alt text-red-700 text-lg font-bold'>
                *
              </span>
            </label>

            <select
              name='city'
              id='acc-city'
              required
              className='select select-bordered'
              onChange={(e) => {
                setCenterCode(e.target.value);
                usernameRef.current.value = e.target.value;
              }}
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
              {centers.map((center) => (
                <option
                  key={center[1]}
                  value={center[1]}
                >
                  {center[0]}
                </option>
              ))}
            </select>
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text font-bold text-lg'>
                Tên đăng nhập
              </span>
              <span className='label-text-alt text-red-700 text-lg font-bold'>
                *
              </span>
            </label>
            <input
              type='text'
              placeholder='Tên đăng nhập'
              ref={usernameRef}
              required
              className='input input-bordered w-full max-w-xs text-black'
              inputMode='text'
            />
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text font-bold text-lg'>Mật khẩu</span>
              <span className='label-text-alt text-red-700 text-lg font-bold'>
                *
              </span>
            </label>
            <div className='container flex flex-row'>
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder='Mật khẩu'
                ref={passwordRef}
                required
                className='input input-bordered w-full max-w-xs text-black'
                end
              />
            </div>
            <div className='flex flex-row gap-4 mx-auto mb-4'>
              <button
                className='btn btn-outline btn-neutral'
                type='reset'
              >
                Hủy bỏ
              </button>
              <button
                type='submit'
                className='btn btn-primary'
              >
                Thêm mới
              </button>
            </div>
            </div>
          </form>
        </div>
      </>
    );
}