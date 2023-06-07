"use client"

import React, { useRef, useState } from 'react';
import tinh_tp from '@/public/tinh_tp.json';

// get provinces from json file
let provinces: string[] = [];
for (let i = 0; i < tinh_tp.tinh.length; i++) {
    provinces.push(tinh_tp.tinh[i].name);
}

export default function AddCenterForm() {
    const centerCode = useRef('');
    const centerName = useRef('');
    const hotline = useRef('');
    const email = useRef('');
    const centerProvince = useRef('');
    const address = useRef('');
    const manager = useRef('');
    const state = useRef('');
    const [showError, setShowError] = useState(false);

    return (
        <>
            <div className='card container mx-auto w-max bg-base-100 shadow-xl'>
                <form action="" className='card-body flex flex-row gap-20 mx-auto px-10 py-10'>
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
                                required
                                minLength={4}
                                maxLength={10}
                                className='input input-bordered w-full max-w-xs text-black'
                                onChange={(e) => (centerCode.current = e.target.value)}
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
                                required
                                minLength={6}
                                className='input input-bordered w-full max-w-xs text-black'
                                onChange={(e) => (centerName.current = e.target.value)}
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

                            <select name="city" id="city"
                                required
                                className='select select-bordered'
                                onChange={(e) => centerProvince.current = e.target.value}>
                                <option disabled selected className='text-gray-700 font-light'>Chọn tỉnh/thành phố</option>
                                {provinces.map((province) => (
                                    <option value={province}>{province}</option>
                                ))}
                            </select>
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
                                className='select select-bordered'
                                onChange={(e) => (state.current = e.target.value)}>
                                <option disabled selected className='text-gray-700 font-light'>Chọn trạng thái</option>
                                <option value="Hoạt động">Hoạt động</option>
                                <option value="Đóng cửa">Đóng cửa</option>
                            </select>
                        </div>
                    </div>
                </form>
                    <div className='flex flex-row gap-4 mx-auto mb-4'>
                        <div className='btn btn-outline btn-neutral'>Hủy bỏ</div>
                        <div className='btn btn-primary' onClick={() => {
                            if (centerCode.current === '' || centerName.current === '' || hotline.current === '' || email.current === '' || centerProvince.current === '' || address.current === '' || state.current === '') {
                                setShowError(true);
                            } else {
                                setShowError(false);
                            }
                        }}>Thêm mới</div>
                    </div>
            </div>
        </>
    )
}