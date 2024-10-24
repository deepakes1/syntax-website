import React from 'react';
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
    
    
    <h1 className='mt-20 text-4xl font-extrabold text-center'>Events</h1>

    <div className="mt-32 rounded-xl md:flex gap-5 mx-auto  justify-center h-[70%] items-center w-[80vw]">
        
      <Link to = "/events/tech" >
        <div className="cards p-5 mt-7 md:mt-0  shadow-xl bg-[#eeeee4] rounded-xl  w-[300px] flex flex-col justify-center items-center mx-auto">
        <div className="">
          <img src={tech} className='h-56 w-56 object-contain rounded-xl' alt="" />
        </div>
        <div className="mt-2 w-56 text-xl font-semibold">
          <h1>Technical Events</h1>
        <p>View More..</p>
        </div>
      </div>
      </Link>

      <Link to = "/events/tech">
        <div className="cards p-5 mt-7 md:mt-0  shadow-xl bg-[#eeeee4] rounded-xl  w-[300px] flex flex-col justify-center items-center mx-auto">
        <div className="">
          <img src={nontech} className='h-56 w-56 object-contain rounded-xl' alt="" />
        </div>
        <div className="mt-2 w-56 text-xl font-semibold">
          <h1>Technical Events</h1>
        <p>View More..</p>
        </div>
      </div>
      </Link>

      <Link to = "/events/tech">
        <div className="cards p-5 mt-7 md:mt-0  shadow-xl bg-[#eeeee4] rounded-xl  w-[300px] flex flex-col justify-center items-center mx-auto">
        <div className="">
          <img src={hackathon} className='h-56 w-56 object-contain rounded-xl' alt="" />
        </div>
        <div className="mt-2 w-56 text-xl font-semibold">
          <h1>Technical Events</h1>
        <p>View More..</p>
        </div>
      </div>
      </Link>

      

    </div>
    </>
  );
}

export default Eventsection;