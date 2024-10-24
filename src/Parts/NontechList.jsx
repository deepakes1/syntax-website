import React from 'react'
import { Link } from 'react-router-dom';

import img1 from '../assets/clip craft.png';
import img2 from '../assets/linktopia.png';
import img3 from '../assets/Meme creation.png';
import img4 from '../assets/sphere clash.png';
import img5 from '../assets/Visual Design.png';


function NontechList() {
  return (
    <div>
      <div className="mt-32">
      <div className="flex flex-wrap justify-center gap-10 w-[80vw] mx-auto">
        
        {/* Technical Events Card */}
        <Link to="/events/non-tech/Video-Editing">
          <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[300px] flex flex-col justify-center items-center">
            <img src={img1} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Video-Editing </h1>
                <p>View Rules...</p>
            </div>
            </div>
        </Link>

        {/* Non-Technical Events Card */}
        <Link to="/events/non-tech/Connection">
            <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[300px] flex flex-col justify-center items-center">
            <img src={img2} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Connection</h1>
                <p>View Rules...</p>
            </div>
            </div>

        </Link>
        {/* Hackathon Card */}
        <Link to="/events/non-tech/Memecreation">
            <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[300px] flex flex-col justify-center items-center">
            <img src={img3} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Meme Creation</h1>
                <p>View Rules...</p>
            </div>
            </div>

        </Link>
        {/* Additional Hackathon Card */}
        <Link to="/events/non-tech/MarbleShowDown">
            <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[300px] flex flex-col justify-center items-center">
            <img src={img4} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>The Marble Showdown Game</h1>
                <p className='text-blue-500'>View Rules...</p>
            </div>
            </div>
        </Link>

        {/* Another Hackathon Card */}
        <Link to="/events/non-tech/PosterDesign">
            <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[300px] flex flex-col justify-center items-center">
            <img src={img5} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Poster Design</h1>
                <p>View Rules...</p>
            </div>
            </div>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default NontechList
