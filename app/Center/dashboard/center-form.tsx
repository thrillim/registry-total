"use client"

import React, { useRef, useState } from 'react';
import { map } from 'zod';

const data = {
    centerCode: '12345',
    centerName: 'Trung tâm Đăng kiểm số 1',
    hotline: '0123456789',
    email: 'email@gmail.com',
    centerProvince: 'Hà Nội',
    address: 'Số 1, đường 1, phường 1, quận 1, thành phố 1',
    manager: 'Nguyễn Văn A',
    state: 'Hoạt động',
}

export default function CenterInfo() {
    const hotline = useRef('');
    const email = useRef('');
    const address = useRef('');
    const manager = useRef('');
    const state = useRef('');
    const [showError, setShowError] = useState(false);

    return (
        <>
            <div className='card container mx-auto w-max bg-base-100 shadow-xl card-bordered'>
                <form action="" className='card-body mx-auto px-10 py-7'>
                    <div className='container flex flex-row gap-20'>
                        <div className='flex flex-col gap-3'>
                            <div className='form-control w-full max-w-xs'>
                                <label className='label'>
                                    <span className='label-text font-bold text-lg'>
                                        Mã trung tâm
                                    </span>
                                    <span className="label-text-alt text-red-700 text-lg font-bold">*</span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='Mã trung tâm'
                                    autoComplete='username'
                                    value={data.centerCode}
                                    required
                                    readOnly
                                    className='input input-bordered w-full max-w-xs text-black'
                                />
                            </div>
                            <div className='form-control w-full max-w-xs'>
                                <label className='label'>
                                    <span className='label-text font-bold text-lg'>Tên trung tâm</span>
                                    <span className="label-text-alt text-red-700 text-lg font-bold">*</span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='Tên trung tâm'
                                    autoComplete='organization'
                                    value={data.centerName}
                                    required
                                    readOnly
                                    className='input input-bordered w-full max-w-xs text-black'
                                />
                            </div>
                            <div className='form-control w-full max-w-xs'>
                                <label className='label'>
                                    <span className='label-text font-bold text-lg'>Số điện thoại</span>
                                    <span className="label-text-alt text-red-700 text-lg font-bold">*</span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='Hotline'
                                    autoComplete='phone'
                                    defaultValue={data.hotline}
                                    required
                                    pattern='[0-9]{8,12}'
                                    className='input input-bordered w-full max-w-xs text-black'
                                    onChange={(e) => (hotline.current = e.target.value)}
                                />
                            </div>
                            <div className='form-control w-full max-w-xs'>
                                <label className='label'>
                                    <span className='label-text font-bold text-lg'>Email</span>
                                    <span className="label-text-alt text-red-700 text-lg font-bold">*</span>
                                </label>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    autoComplete='email'
                                    defaultValue={data.email}
                                    required
                                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
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
                                    <span className="label-text-alt text-red-700 text-lg font-bold">*</span>
                                </label>

                                <input name="city"
                                    required
                                    className='input input-bordered w-full max-w-xs text-black'
                                    value={data.centerProvince}
                                    readOnly
                                />
                            </div>
                            <div className='form-control w-full max-w-xs'>
                                <label className='label'>
                                    <span className='label-text font-bold text-lg'>Địa chỉ</span>
                                    <span className="label-text-alt text-red-700 text-lg font-bold">*</span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='Địa chỉ'
                                    autoComplete='address'
                                    defaultValue={data.address}
                                    required
                                    className='input input-bordered w-full max-w-xs text-black'
                                    onChange={(e) => (address.current = e.target.value)}
                                />
                            </div>
                            <div className='form-control w-full max-w-xs'>
                                <label className='label'>
                                    <span className='label-text font-bold text-lg'>Quản lý</span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='Tên nhân viên quản lý'
                                    autoComplete='name'
                                    autoCapitalize='true'
                                    defaultValue={data.manager}
                                    className='input input-bordered w-full max-w-xs text-black'
                                    onChange={(e) => (manager.current = e.target.value)}
                                />
                            </div>
                            <div className='form-control w-full max-w-xs'>
                                <label className='label'>
                                    <span className='label-text font-bold text-lg'>Trạng thái hoạt động</span>
                                    <span className="label-text-alt text-red-700 text-lg font-bold">*</span>
                                </label>
                                <select name="status" id="status"
                                    className='select select-bordered text-black'
                                    onChange={(e) => (state.current = e.target.value)}
                                    defaultValue={data.state}>
                                    
                                    <option key={"none"} value={'DEFAULT'} disabled className='text-gray-700 font-light'>Chọn trạng thái</option>
                                    <option key="active" value="Hoạt động" className='text-black'>Hoạt động</option>
                                    <option key="inactive" value="Đóng cửa" className='text-black'>Đóng cửa</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 mx-auto my-4'>
                        <button className='btn btn-outline btn-neutral' type='reset'>Hủy bỏ</button>
                        <button className='btn btn-primary' type='submit' onClick={() => {
                            if (email.current === '' || state.current === '' || hotline.current === '') {
                                setShowError(true);
                            } else {
                                setShowError(false);
                                data.email = email.current;
                                data.hotline = hotline.current;
                                data.address = address.current;
                                data.manager = manager.current;
                                data.state = state.current;
                                alert('Cập nhật thành công');
                            }
                        }}>Thêm mới</button>
                    </div>
                </form>

            </div>
        </>
    )
}