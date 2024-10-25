import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../assets/clip craft.png';
import img2 from '../assets/linktopia.png';
import img3 from '../assets/Meme creation.png';
import img4 from '../assets/sphere clash.png';
import img5 from '../assets/Visual Design.png';


function NontechList() {

   const [visibleSections, setVisibleSections] = useState({
    instruc: false,
  });

  const sectionsRef = useRef([]);

  const handleScroll = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !visibleSections.instruc) {
        setVisibleSections(prev => ({
          ...prev,
          [entry.target.id]: true,
        }));
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div div id="nontech" ref={el => sectionsRef.current[0] = el} className={`p-5 h-[80vh] md:h-[70vh] transition-opacity duration-1000 ${visibleSections.nontech ? 'opacity-100' : 'opacity-0'}`}>
      <div className="mt-32 p-7">
      <h1 className='text-4xl font-extrabold text-center mb-7'>Non-Technical Events</h1>
      <div className="flex flex-col md:flex-row md:flex-wrap mt-10 justify-center items-center gap-10 md:w-[80vw] md:mx-auto">
        
        {/* Technical Events Card */}
        <Link to="/events/non-tech/Video-Editing">
          <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[280px] flex flex-col justify-center items-center">
            <img src={img1} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Video-Editing </h1>
                <p>View Rules...</p>
            </div>
            </div>
        </Link>

        {/* Non-Technical Events Card */}
        <Link to="/events/non-tech/Connection">
            <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[280px] flex flex-col justify-center items-center">
            <img src={img2} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Connection</h1>
                <p>View Rules...</p>
            </div>
            </div>

        </Link>
        {/* Hackathon Card */}
        <Link to="/events/non-tech/Memecreation">
            <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[280px] flex flex-col justify-center items-center">
            <img src={img3} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Meme Creation</h1>
                <p>View Rules...</p>
            </div>
            </div>

        </Link>
        {/* Additional Hackathon Card */}
        <Link to="/events/non-tech/MarbleShowDown">
            <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[280px] flex flex-col justify-center items-center">
            <img src={img4} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>The Marble Showdown Game</h1>
                <p className='text-blue-500'>View Rules...</p>
            </div>
            </div>
        </Link>

        {/* Another Hackathon Card */}
        <Link to="/events/non-tech/PosterDesign">
            <div className="cards p-5 shadow-xl bg-[#eeeee4] rounded-xl w-[280px] flex flex-col justify-center items-center">
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
