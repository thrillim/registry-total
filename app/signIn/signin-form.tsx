'use client'
import React, { useRef, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
    const router = useRouter();
    const usernameRef = useRef('');
    const passwordRef = useRef('');
    const [showError, setShowError] = useState(false);

    // const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // function togglePasswordVisibility() {
    //     setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible);
    // }


    const onSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const result = await signIn('credentials', {
            username: usernameRef.current,
            password: passwordRef.current,
            redirect: false,
        });
        if (result != null) {
            if (result.error) {
                // Handle incorrect credentials
                console.log(result.error);
                setShowError(true);
            } else {
                // Handle successful sign-in
                console.log('Signed in successfully', result);
                // redirect to homepage
                router.push('/');
            }
        }
    };


    return (
        <>
            <div className='card min-w-xs max-w-lg max-md:min-w-fit md:w-[90%] lg:w-[70%] w-[80%] bg-base-100 shadow-xl mt-[8rem] mx-auto'>
                <form className='card-body items-center text-center'>
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
                            autoComplete='username'
                            required
                            className='input input-bordered w-full max-w-xs text-black'
                            onChange={(e) => (usernameRef.current = e.target.value)}
                        />
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'>
                            <span className='label-text font-bold text-lg'>Mật khẩu</span>
                        </label>
                        <div className='container flex flex-row'>
                            <input
                                // type={isPasswordVisible ? "text" : "password"}
                                type='password'
                                placeholder='Mật khẩu'
                                autoComplete='password'
                                required
                                className='input input-bordered w-full max-w-xs text-black'
                                onChange={(e) => (passwordRef.current = e.target.value)}
                            />
                            {/* <button
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
                            </button> */}
                        </div>
                        {showError && (
                            <label className='label'>
                                <span className='label-text text-error'>
                                    Sai tên đăng nhập hoặc mật khẩu
                                </span>
                            </label>
                        )}


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
                            type="submit"
                            onClick={onSubmit}
                        >
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}