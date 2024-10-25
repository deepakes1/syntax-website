
import React, { useEffect, useRef, useState } from 'react';
function Instructions() {
    const [visibleSections, setVisibleSections] = useState({
    heading: false,
    poster: false,
    about: false,
    carousel: false,
    contact: false,
  });

  const sectionsRef = useRef([]);

  const handleScroll = (entries) => {
    entries.forEach(entry => {
      setVisibleSections(prev => ({
        ...prev,
        [entry.target.id]: entry.isIntersecting,
      }));
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
    <div id="instruc" ref={el => sectionsRef.current[0] = el} className={`p-5 h-[80vh] md:h-[70vh] transition-opacity duration-1000 ${visibleSections.instruc ? 'opacity-100' : 'opacity-0'}`}>>
        <div className='mt-20 md:w-[80vw] md:mx-auto'>
      <h1 className='text-center text-4xl font-black'>General Instructions for Zinnia</h1>

      <ul className='list-disc text-2xl p-5 mt-5'>
        <li>All participants must carry their <b>valid college ID cards</b>.</li>
        <li>Participants must complete the <b>registration </b> process <b>before joining the event</b>.</li>
        <li>Students must <b>arrive</b>  at the <b>venue on time</b>  for all events and sessions.</li>
        <li>Participants are expected to <b> maintain appropriate dress code</b>.</li>
        <li>Participants must <b>follow the instructions</b>  provided by the event co-ordinators, volunteers, judges at all times.</li>
        <li>Misbehaviors, use of foul language, or any form of misconduct will lead to disqualification.</li>
        <li>Participants must raise any objections or complaints with event co-ordinators immediately after the event. <b>Post event complaints may not be considered</b> .</li>
        <li>Participants  <b>should bring necessary materials </b>(such as laptop, charger, etc.) as per event requirements.</li>
        <li>Each event may have <b>additional rules that will be shared at the beginning of the event</b> and participants must follow them strictly.</li>
        <li>The decision of the <b>judges will be final and binding</b>. No further appeals or discussion regarding results will be entertained.</li>
        <li>Lunch will be served at 01:30 PM to 02:30 PM for 07th Nov 2024 and 12:30 PM to 01:30 PM for 08th Nov 2024.</li>
        <li>Events timing starts with 09:00 AM to 05:00 PM for both days (07th & 08th Nov).</li>
      </ul>
    </div>
    </div>
    
  );
}

export default Instructions;
