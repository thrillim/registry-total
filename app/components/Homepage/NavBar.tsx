import SignInButton from './SignInButton';

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
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52'
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
          <svg
            width='25'
            height='25'
            viewBox='0 0 35 35'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_9_209)'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.5 3.18156C9.59167 3.18156 3.18156 9.59167 3.18156 17.5C3.18156 25.4083 9.59167 31.8184 17.5 31.8184C25.4083 31.8184 31.8184 25.4083 31.8184 17.5C31.8184 9.59167 25.4083 3.18156 17.5 3.18156ZM0 17.5C0 7.83569 7.83569 0 17.5 0C27.1643 0 35 7.83569 35 17.5C35 27.1643 27.1643 35 17.5 35C7.83569 35 0 27.1643 0 17.5Z'
                fill='#006661'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.1965 12.6081L2.66034 14.515L2.03656 11.3947L11.5727 9.48773C15.4863 8.70445 19.5152 8.70445 23.4288 9.48773L32.9635 11.3947L32.3397 14.515L22.805 12.6081C19.303 11.9074 15.697 11.9074 12.1965 12.6081Z'
                fill='#006661'
                stroke='#006661'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.23973 23.6367H2.34845V20.4551H4.23973C9.21145 20.4551 13.5822 23.7506 14.9479 28.5315L16.0004 32.2144L12.9413 33.0888L11.8889 29.4059C10.9133 25.9908 7.79157 23.6367 4.23973 23.6367ZM23.1126 29.4059L22.0602 33.0888L19.0011 32.2144L20.0535 28.5315C21.4193 23.7506 25.7886 20.4551 30.7617 20.4551H32.6516V23.6367H30.7617C27.2099 23.6367 24.0882 25.9908 23.1126 29.4059Z'
                fill='#006661'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.5014 16.8179C16.7053 16.8179 16.0616 17.463 16.0616 18.2577C16.0616 19.0523 16.7053 19.6975 17.5014 19.6975C18.2961 19.6975 18.9398 19.0523 18.9398 18.2577C18.9398 17.463 18.2961 16.8179 17.5014 16.8179ZM12.8801 18.2577C12.8801 15.7056 14.9479 13.6363 17.5014 13.6363C20.0535 13.6363 22.1214 15.7056 22.1214 18.2577C22.1214 20.8098 20.0535 22.879 17.5014 22.879C14.9479 22.879 12.8801 20.8098 12.8801 18.2577Z'
                fill='#006661'
              />
            </g>
            <defs>
              <clipPath id='clip0_9_209'>
                <rect
                  width='35'
                  height='35'
                  fill='white'
                />
              </clipPath>
            </defs>
          </svg>
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
