'use client';

import { useSession } from 'next-auth/react';


import { useState, useEffect } from 'react';
import TongQuat from './check1';
import PhanTren from './check2';
import Phanh from './check3';
import MoiTruong from './check4';
import PhanDuoi from './check5';
import { Page } from '@react-pdf/renderer';

export default function CheckAll() {
  const { data: session } = useSession({
    required: true,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem('bienSo')) {
      alert('Vui lòng chọn biển số xe');
      return false;
    }
    // trim 2 first and 2 last character of bienSo
    const bienSo = localStorage.getItem('bienSo').slice(1, -1)
    const res = await fetch('http://localhost:3000/api/createRegistStatus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        RegistCenterId: session?.user?.RegistCenterId,
        bienSo: bienSo,
        step1: JSON.parse(localStorage.getItem('check1')),
        step2: JSON.parse(localStorage.getItem('check2')),
        step3: JSON.parse(localStorage.getItem('check3')),
        step4: JSON.parse(localStorage.getItem('check4')),
        step5: JSON.parse(localStorage.getItem('check5')),
      }),
    });
    const data = await res.json();

    if (data.statusId) {
      if (data.status === 'Thành công') {
        // Alert success and ask if user want to print
        alert('Đăng kiểm thành công');
        if (confirm('Bạn có muốn in phiếu đăng kiểm không?')) {
          // Redirect to print Page
          window.location.href = `/Center/${session?.user?.RegistCenterId}/registry/print`;
        }
        localStorage.removeItem('carId');
        localStorage.removeItem('check1');
        localStorage.removeItem('check2');
        localStorage.removeItem('check3');
        localStorage.removeItem('check4');
        localStorage.removeItem('check5');
        localStorage.removeItem('bienSo');
        localStorage.setItem('statusId', data.statusId);
      } else {
        alert('Đăng kiểm thất bại');
      }
    } else {
      alert('Có lỗi xảy ra');
    }
  };
  return (
    <div
      className='container w-full min-w-max min-h-screen 
                my-20 mx-auto flex flex-col gap-10 items-center'
    >
      <h2 className='font-bold text-3xl text-center text-primary'>
        Các công đoạn
      </h2>

      <TongQuat />

      <PhanTren />

      <Phanh />

      <MoiTruong />

      <PhanDuoi />

      <button onClick={onSubmit}>Xem kết quả</button>
    </div>
  );
}
