import type { Metadata } from 'next'
import Homepage from './components/Homepage/page';
import About from './components/About/page';

export const metadata: Metadata = {
  title: 'Registry Total',
  description: 'Welcome to Registry Total',
  icons: {icon: '/favicon.ico'}
};

export default function Home() {
  return (
    <div className='bg-white'>
      <Homepage />
      <div className="divider"></div> 
      <About />
    </div>
  );
}
