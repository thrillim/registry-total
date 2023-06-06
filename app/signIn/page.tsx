'use client';
import React, { useRef } from 'react';
import { signIn } from 'next-auth/react';

export default function SignIn() {
  const username = useRef('');
  const password = useRef('');

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: username.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className='h-screen w-full bg-neutral items-center p-0 flex flex-row'>
      {/* image */}
      <div className='flex-auto basis-auto h-screen min-w-[480px] items-center max-md:hidden relative bg-sign-in bg-cover bg-center'></div>
      <div className='flex-auto basis-auto w-full m-4 h-full justify-center items-center'>
        <div className='card min-w-xs max-w-lg max-md:min-w-fit md:w-[90%] lg:w-[70%] w-[80%] bg-base-100 shadow-xl mt-[8rem] mx-auto'>
          <div className='card-body items-center text-center'>
            <div className='card-title text-primary text-4xl font-extrabold my-5'>
              <h1>Đăng nhập</h1>
            </div>
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text font-bold text-lg'>
                  Tên đăng nhập
                </span>
              </label>
              <input
                type='text'
                placeholder='Tên đăng nhập'
                className='input input-bordered w-full max-w-xs text-black'
                onChange={(e) => (username.current = e.target.value)}
              />
            </div>
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text font-bold text-lg'>Mật khẩu</span>
              </label>
              <input
                type='password'
                placeholder='Mật khẩu'
                className='input input-bordered w-full max-w-xs text-black'
                onChange={(e) => (password.current = e.target.value)}
              />
              <label className='label'>
                <a
                  href='#'
                  className='label-text-alt link link-hover'
                >
                  Quên mật khẩu?
                </a>
              </label>
            </div>
            <div className='form-control w-full max-w-xs mt-6'>
              <button
                className='btn btn-outline btn-secondary'
                onClick={onSubmit}
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

