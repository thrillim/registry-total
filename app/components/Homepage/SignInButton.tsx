'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import React from 'react';
import Link from 'next/link';


export default function SignInButton() {
  const { data: session } = useSession();

  if (session && session.user.accId) {
    console.log(session);
    return (
      <div className='flex justify-around gap-2 align-middle'>
        {
          (session.user.accRole === 'Admin')
            ? (
              <Link
                className='btn btn-sm btn-outline '
                href='/Register/dashboard'
              >
                {session.user.accUsername}
              </Link>
            )
            : (
              <Link
                className='btn btn-sm btn-outline '
                href='/Center/${session.user.RegistCenterId}/account'
              >
                {session.user.accUsername}
              </Link>
            )
        }

        <button
          className='btn btn-sm btn-error'
          onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
        >
          Đăng xuất
        </button>
      </div>
    );
  }

  return (
    <div className='flex justify-around gap-2 align-middle'>
      <button
        className='btn btn-sm btn-outline btn-primary'
        onClick={() => signIn()}
      >
        Đăng nhập
      </button>
    </div>
  );
}
