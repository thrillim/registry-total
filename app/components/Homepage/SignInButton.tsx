'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import React from 'react';
import Link from 'next/link';

export default function SignInButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    console.log(session.user);
    return (
      <div className='flex justify-around gap-2 align-middle'>
        <Link
          className='btn btn-sm btn-outline '
          href='#'
        >
          {session.user.accUsername}
        </Link>
        <button
          className='btn btn-sm btn-error'
          onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
        >
          Sign out
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
        Sign in
      </button>
    </div>
  );
}
