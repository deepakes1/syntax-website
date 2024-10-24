// src/AnimatedCard.js
import React, { useEffect, useState } from 'react';

const Cards = ({ image, text }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const toggleFlip = () => {
/*************  ✨ Codeium Command ⭐  *************/
/** 
 * Toggles the flipped state of the card, switching between 
 * its front and back views by updating the 'isFlipped' state.
 */
/******  c9de4687-f5db-4cb4-b2b5-4968372193da  *******/    setIsFlipped(!isFlipped);
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
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt="Card Front" />
        </div>
        <div className="card-back">
          <p className='text-center bg-[#40377D] h-full text-[#E6E6FA]'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
