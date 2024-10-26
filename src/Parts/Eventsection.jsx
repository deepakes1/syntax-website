import React, { useEffect, useRef, useState } from 'react';
import Dropdown from '@/components/Dropdown';
import Dropdown2 from '@/components/Dropdown2';
import { Link } from 'react-router-dom';
import hackathon from "../assets/hackathonevent.png"; 
import tech from "../assets/tech.png"
import nontech from "../assets/nontech.png"

function Eventsection() {
  
  return (
    // <div className='flex flex-col justify-center gap-3 text-2xl items-center h-[80vh] lg:h-screen mt-[10vh]'> {/* Added margin-top */}
    //   <Dropdown />
    //   <Dropdown2 />
    //   <Link to="/Hackathon" className='inline-flex font-bold justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-lg text-gray-700 hover:bg-gray-50 focus:outline-none w-[200px]'>
    //     Hackathon
    //   </Link>
    // </div>

    <>
    
    
    <div>
      <h1 className='mt-28 text-4xl font-extrabold text-center'>Events</h1>

    <div className="flex flex-col md:flex-row mt-10 justify-center items-center gap-10 w-[80vw] mx-auto">
      <Link to="/events/tech">
        <div className="cards p-5 mt-2 md:mt-0 shadow-xl bg-[#eeeee4] rounded-xl w-[280px] flex flex-col justify-center items-center">
          <img src={tech} className='h-56 w-56 object-contain rounded-xl' alt="" />
          <div className="mt-2 text-xl font-semibold text-center">
            <h1>Technical Events</h1>
            <div className="flex gap-1 items-center">
              <p>View More</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/events/NontechList">
        <div className="cards p-5 mt-2 md:mt-0 shadow-xl bg-[#eeeee4] rounded-xl w-[280px] flex flex-col justify-center items-center">
          <img src={nontech} className='h-56 w-56 object-contain rounded-xl' alt="" />
          <div className="mt-2 text-xl font-semibold text-center">
            <h1>Non-Technical Events</h1>
            <div className="flex gap-1 items-center">
              <p>View More</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/Hackathon" className='mb-10 md:mb-0'>
        <div className="cards p-5 mt-2 md:mt-0 shadow-xl bg-[#eeeee4] rounded-xl w-[280px] flex flex-col justify-center items-center">
          <img src={hackathon} className='h-56 w-56 object-contain rounded-xl' alt="" />
          <div className="mt-2 text-xl font-semibold text-center">
            <h1>Hackathon</h1>
            <div className="flex gap-1 items-center">
              <p>View More</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
    </div>

    </>
  );
}

export default Eventsection;