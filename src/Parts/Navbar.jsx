
import Logo from '../assets/logomob.jpg'
import Drawer from '../components/Drawer';
import React from 'react';
import { useState } from 'react';


function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className=' bg-navbar text-white p-2 md:p-6'>
      <div className="md:flex justify-between items-center text-lg font-semibold">
        <div className="flex items-center justify-between">
          <img src={Logo}  className='w-[90vw] h-10 object-fit' alt="" />
          <div className="md:hidden w-[10vw]" onClick={() => setShowNav(!showNav)}>
            <Drawer/>
          </div>
        </div>

        <div className={`hidden  mt-4 md:mt-0 text-center md:flex second-color font-bold md:font-semibold md:text-md gap-3`}>
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


