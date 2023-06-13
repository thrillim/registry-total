'use client';

import { useState, useEffect } from 'react';
import TongQuat from './check1';
import PhanTren from './check2';
import Phanh from './check3';
import MoiTruong from './check4';
import PhanDuoi from './check5';


function createStatus() {
  
}

export default function CheckAll() {
  return (
    <div
      className='container w-full min-w-max min-h-screen 
                my-20 mx-auto flex flex-col gap-10 items-center'
    >
      <h2 className='font-bold text-3xl text-center text-primary'>
        Kết quả kiểm tra
      </h2>

      
          <TongQuat />
        

      
          <PhanTren />



          <Phanh />


          <MoiTruong />


          <PhanDuoi />

          <button onClick={createStatus}>Xem kết quả</button>

    </div>
  );
}
