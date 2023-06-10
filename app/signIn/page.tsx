'use client';

import SignInForm from './signin-form';
import { metadata } from './signin-form';

export default function SignIn() {
  return (
    <div className='h-screen w-full bg-neutral items-center p-0 flex flex-row'>
      {/* image */}
      <div className='flex-auto basis-auto h-screen min-w-[480px] items-center max-md:hidden relative bg-sign-in bg-cover bg-center'></div>
      <div className='flex-auto basis-auto w-full m-4 h-full justify-center items-center'>
        <SignInForm />
      </div>
    </div>
  );
}

