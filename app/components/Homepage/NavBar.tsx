import SignInButton from './SignInButton';
import Logo from '../Logo/logo';

export default function NavBar() {
  return (
    <div className='navbar bg-base-100 shadow-md z-50'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label
            tabIndex={0}
            className='btn btn-ghost text-secondary lg:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu
            p-2 glass shadow-lg bg-base-100 rounded-box w-max 
            text-black text-md font-semibold'
          >
            <li>
              <a>Tin tức</a>
            </li>
            <li>
              <a>Hướng dẫn</a>
            </li>
            <li>
              <a>Giới thiệu</a>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost no-animation normal-case text-xl text-accent gap-2'>
          <Logo />
          Registry Total
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal text-secondary px-1'>
          <li>
            <a>Tin tức</a>
          </li>
          <li>
            <a>Hướng dẫn</a>
          </li>
          <li>
            <a>Giới thiệu</a>
          </li>
        </ul>
      </div>
      <div className='sm:flex navbar-end gap-1'>
        <SignInButton />
      </div>
    </div>
  );
}
