// src/AnimatedCard.js
import React, { useEffect, useState } from 'react';
// Import CSS for styling

const Cards = ({image, text}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setIsFlipped((prev) => !prev);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col justify-center items-center card ${isFlipped ? 'flipped' : ''}`} onMouseEnter={toggleFlip} onMouseLeave={toggleFlip}>
      <div className="card-inner ">
        <div className="card-front">
        <p className='text-center bg-[#40377D] h-full text-[#E6E6FA]'>{text}</p>

        </div>
        <div className="card-back">
          <img src={image} alt="Card Front" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
