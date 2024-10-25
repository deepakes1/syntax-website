import React, { useEffect, useRef, useState } from 'react';
import Dropdown from '@/components/Dropdown';
import Dropdown2 from '@/components/Dropdown2';
import { Link } from 'react-router-dom';
import hackathon from "../assets/hackathonevent.png"; 
import tech from "../assets/tech.png"
import nontech from "../assets/nontech.png"

function Eventsection() {
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
    // <div className='flex flex-col justify-center gap-3 text-2xl items-center h-[80vh] lg:h-screen mt-[10vh]'> {/* Added margin-top */}
    //   <Dropdown />
    //   <Dropdown2 />
    //   <Link to="/Hackathon" className='inline-flex font-bold justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-lg text-gray-700 hover:bg-gray-50 focus:outline-none w-[200px]'>
    //     Hackathon
    //   </Link>
    // </div>

    <>
    
    
    <div  id="event" ref={el => sectionsRef.current[0] = el} className={`p-5 h-[80vh] md:h-[70vh] transition-opacity duration-1000 ${visibleSections.event ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className='mt-28 text-4xl font-extrabold text-center'>Events</h1>

    <div className="mt-10 mx-auto mb-10 rounded-xl md:flex gap-5 justify-center items-center w-[80vw]">
      <Link to="/events/tech">
        <div className="cards p-5 mt-2 md:mt-0 shadow-xl bg-[#eeeee4] rounded-xl w-[300px] flex flex-col justify-center items-center">
          <img src={tech} className='h-56 w-56 object-contain rounded-xl' alt="" />
          <div className="mt-2 text-xl font-semibold text-center">
            <h1>Technical Events</h1>
            <p>View More..</p>
          </div>
        </div>
      </Link>

      <Link to="/events/NontechList">
        <div className="cards p-5 mt-2 md:mt-0 shadow-xl bg-[#eeeee4] rounded-xl w-[300px] flex flex-col justify-center items-center">
          <img src={nontech} className='h-56 w-56 object-contain rounded-xl' alt="" />
          <div className="mt-2 text-xl font-semibold text-center">
            <h1>Non-Technical Events</h1>
            <p>View More..</p>
          </div>
        </div>
      </Link>

      <Link to="/Hackathon" className='mb-10 md:mb-0'>
        <div className="cards p-5 mt-2 md:mt-0 shadow-xl bg-[#eeeee4] rounded-xl w-[300px] flex flex-col justify-center items-center">
          <img src={hackathon} className='h-56 w-56 object-contain rounded-xl' alt="" />
          <div className="mt-2 text-xl font-semibold text-center">
            <h1>Hackathon</h1>
            <p>View Rules..</p>
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