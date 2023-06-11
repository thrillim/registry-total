import type { Metadata } from 'next'
import Homepage from './components/Homepage/Home';
import About from './components/About/About';

export const metadata: Metadata = {
  title: 'Registry Total',
  description: 'Welcome to Registry Total',
  icons: {icon: '/favicon.ico'}
};

export default function Home() {
  return (
    <div className='bg-white max-w-screen min-w-[400px]'>
      <Homepage />
      <div className="divider"></div> 
      <div id='about'>
        <About />
      </div>
      
    </div>
  );
}
