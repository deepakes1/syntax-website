
import Logo from '../assets/logo.jpg'

import React from 'react';
import { useState } from 'react';

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className=' bg-navbar text-white p-6'>
      <div className="md:flex justify-between items-center text-lg font-semibold">
        <div className="flex items-center justify-between">
          <img src={Logo}  className = "h-16 w-16 rounded-full object-cover" alt="" />
          <div className="md:hidden" onClick={() => setShowNav(!showNav)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="second-color"
              className="bi bi-caret-down-square"
              viewBox="0 0 16 16"
            >
              <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z" />
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
            </svg>
          </div>
        </div>

        <div className={`mt-4 md:mt-0 text-center md:flex second-color font-bold md:font-semibold md:text-md gap-3 ${showNav ? 'block' : 'hidden'} md:block`}>
          <div className='mb-1'><h1 className='md:bg-[#40377D] md:px-5 md:py-1 md:rounded-3xl md:text-[#E6E6FA]'>Home</h1></div>
          <div className='mb-1'><h1 className='md:bg-[#40377D] md:px-5 md:py-1 md:rounded-3xl md:text-[#E6E6FA]'>Event</h1></div>
          <div className='mb-1'><h1 className='md:bg-[#40377D] md:px-5 md:py-1 md:rounded-3xl md:text-[#E6E6FA]'>About</h1></div>
          <div className='mb-1'><h1 className='md:bg-[#40377D] md:px-5 md:py-1 md:rounded-3xl md:text-[#E6E6FA]'>Contact</h1></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


