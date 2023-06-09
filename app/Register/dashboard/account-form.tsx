"use client"

import React, { useRef, useState } from 'react';
import stations from '@/public/stations.json';

// get centers from json file
let centers: [[string, string]] = [['', '']];

for (let i = 0; i < stations.stations.length; i++) {
    centers.push([stations.stations[i].stationsName, stations.stations[i].stationCode]);
}

centers.shift();

export default function AddAccountForm() {
    const [centerCode, setCenterCode] = useState(centers[0][1]);
    const password = useRef('');
    const [showError, setShowError] = useState(false);
    const [username, setUsername] = useState('');

    return (
      <>
        <div className='card container mx-auto w-max bg-base-100 shadow-xl'>
          <form
            action=''
            className='card-body flex flex-col gap-5 mx-auto px-10 py-10'
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
                  setUsername(e.target.value);
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
                autoComplete='username'
                required
                className='input input-bordered w-full max-w-xs text-black'
                inputMode='text'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text font-bold text-lg'>Mật khẩu</span>
                <span className='label-text-alt text-red-700 text-lg font-bold'>
                  *
                </span>
              </label>
              <input
                type='password'
                placeholder='Mật khẩu'
                autoComplete='password'
                required
                className='input input-bordered w-full max-w-xs text-black'
                onChange={(e) => (password.current = e.target.value)}
              />
            </div>
          </form>
          <div className='flex flex-row gap-4 mx-auto mb-4'>
            <div
              className='btn btn-outline btn-neutral'
              onClick={() => {}}
            >
              Hủy bỏ
            </div>
            <div
              className='btn btn-primary'
              onClick={() => {}}
            >
              Thêm mới
            </div>
          </div>
        </div>
      </>
    );
}