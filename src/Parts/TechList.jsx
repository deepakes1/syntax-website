import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import img1 from '../assets/Codingfinal.png';
import img2 from '../assets/Mysterysqlfinal.png';
import img3 from '../assets/paperpresentationfinal.png';
import img4 from '../assets/Techxcelerate.png';
import img5 from '../assets/Technicalquizfinal.png';

function TechList() {
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
        <div div id="tech" ref={el => sectionsRef.current[0] = el} className={`p-5 h-[80vh] md:h-[70vh] transition-opacity duration-1000 ${visibleSections.tech ? 'opacity-100' : 'opacity-0'}`}>

    <div className="mt-32 p-7">
      <h1 className='text-4xl font-extrabold text-center mb-7'>Technical Events</h1>
      <div className="flex flex-col md:flex-row md:flex-wrap mt-10 justify-center items-center  gap-10 md:w-[80vw] md:mx-auto">
        
        {/* Technical Events Card */}
        <Link to="/events/tech/coding">
          <div className="cards p-5 mt-2 md:mt-0 shadow-xl bg-[#eeeee4] rounded-xl w-[280px] flex flex-col justify-center items-center">
            <img src={img1} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Coding </h1>
                <div className="flex gap-1 items-center">
              <p>View More</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
            </div>
            </div>
            </div>
        </Link>

        {/* Non-Technical Events Card */}
        <Link to="/events/tech/Mystery-Sql">
            <div className="cards p-5 mt-2 md:mt-0 shadow-xl bg-[#eeeee4] rounded-xl w-[280px] flex flex-col justify-center items-center">
            <img src={img2} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Mystery SQL</h1>
               <div className="flex gap-1 items-center">
              <p>View More</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
            </div>
            </div>
            </div>

        </Link>
        {/* Hackathon Card */}
        <Link to="/events/tech/Paper-Presentation">
            <div className="cards p-5 mt-2 md:mt-0 shadow-xl bg-[#eeeee4] rounded-xl w-[280px] flex flex-col justify-center items-center">
            <img src={img3} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Paper Presentation</h1>
                <div className="flex gap-1 items-center">
              <p>View More</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
            </div>
            </div>
            </div>

        </Link>
        {/* Additional Hackathon Card */}
        <Link to="/events/tech/Technical-Game">
            <div className="cards p-5 mt-2 md:mt-0 shadow-xl bg-[#eeeee4] rounded-xl w-[280px] flex flex-col justify-center items-center">
            <img src={img4} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Tech Game</h1>
                <div className="flex gap-1 items-center">
              <p>View More</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
            </div>
            </div>
            </div>
        </Link>

        {/* Another Hackathon Card */}
        <Link to="/events/tech/Tecnical-Quiz">
            <div className="cards p-5 mt-2 md:mt-0 shadow-xl bg-[#eeeee4] rounded-xl w-[280px] flex flex-col justify-center items-center">
            <img src={img5} className='h-56 w-56 object-contain rounded-xl' alt="Non-Technical Events" />
            <div className="mt-2 text-xl font-semibold text-center">
                <h1>Tech Quiz</h1>
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
    </div>
    </div>
  );
}

export default TechList;