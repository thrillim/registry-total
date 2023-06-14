'use client';

import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import useSWR from 'swr';
const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export function SearchBar() {
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    // save it to localStorage
    localStorage.setItem('bienSo', JSON.stringify(value));
    console.log(localStorage.getItem('bienSo'))
  }, [value]);
  
  const {
    data: cars,
    error,
    isLoading,
  } = useSWR('http://localhost:3000/api/getCarPlates', fetcher);
  if (error) return 'Có lỗi xảy ra khi tải thông tin';
  if (isLoading) return 'Đang tải thông tin....';

  // filter all bienSo to an array
  let carPlates = [];
  for (let i = 0; i < cars.length; i++) {
    carPlates.push(cars[i].bienSo);
  }


  return (
    <>
      <div className='input'>
        <Stack
          spacing={2}
          direction='row'
          minWidth={150}
        >
          <Autocomplete
            value={value}
            onChange={(event: any, newValue: string | null) => {
              setValue(newValue);
            }}
            disablePortal
            id='car'
            clearOnEscape
            fullWidth={true}
            options={carPlates}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Nhập biển số xe'
                fullWidth={true}
              />
            )}
            onChange={(event, value) => {
              setValue(value);
            }}
          />
        </Stack>
        {value !== '' && (
          <>
            <div className='container mx-auto mt-5 font-medium text-lg text-center'>
              Biển số xe:
              <span className='text-accent font-semibold'> {value}</span>
            </div>
          </>
        )}
      </div>
    </>
  );
}
