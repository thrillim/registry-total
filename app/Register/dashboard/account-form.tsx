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
    () => (event) => {
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
              />
              <button
                className="flex items-center px-4 text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className='flex flex-row gap-4 mx-auto mb-4'>
            <button
              type='reset'
              className='btn btn-outline btn-neutral'

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
        </form>
      </div>
    </>
  );
}