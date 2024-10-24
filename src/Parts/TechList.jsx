import React from 'react';
import hackathon from "../assets/Hackathonfinal.png"; 
import tech from "../assets/tech.png";
import nontech from "../assets/nontech.png";
import { Link } from 'react-router-dom';

import img1 from '../assets/Codingfinal.png';
import img2 from '../assets/Mysterysqlfinal.png';
import img3 from '../assets/paperpresentationfinal.png';
import img4 from '../assets/Techxcelerate.png';
import img5 from '../assets/Technicalquizfinal.png';

function TechList() {
  return (
    <div className="mt-32">
      <div className="flex flex-wrap justify-center gap-10 w-[80vw] mx-auto">
        
        {/* Technical Events Card */}
        <Link to="/events/tech/coding">
          <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[300px] flex flex-col justify-center items-center">
            <img src={img1} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Coding </h1>
                <p>View Rules...</p>
            </div>
            </div>
        </Link>

        {/* Non-Technical Events Card */}
        <Link to="/events/tech/Mystery-Sql">
            <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[300px] flex flex-col justify-center items-center">
            <img src={img2} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Mystery SQL</h1>
                <p>View Rules...</p>
            </div>
            </div>

        </Link>
        {/* Hackathon Card */}
        <Link to="/events/tech/Paper-Presentation">
            <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[300px] flex flex-col justify-center items-center">
            <img src={img3} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Paper Presentation</h1>
                <p>View Rules...</p>
            </div>
            </div>

        </Link>
        {/* Additional Hackathon Card */}
        <Link to="/events/tech/Technical-Game">
            <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[300px] flex flex-col justify-center items-center">
            <img src={img4} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Tech Game</h1>
                <p className='text-blue-500'>View Rules...</p>
            </div>
            </div>
        </Link>

        {/* Another Hackathon Card */}
        <Link to="/events/tech/Tecnical-Quiz">
            <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[300px] flex flex-col justify-center items-center">
            <img src={img5} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Tech Quiz</h1>
                <p>View Rules...</p>
            </div>
            </div>
        </Link>
      </div>
    </div>
  );
}

export default TechList;