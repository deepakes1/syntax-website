// src/AnimatedCard.js
import React, { useEffect, useState } from 'react';
// Import CSS for styling

const Cards = () => {
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
      <div className="card-inner">
        <div className="card-front">
          <img src="https://via.placeholder.com/150" alt="Card Front" />
        </div>
        <div className="card-back">
          <p>This is the content on the back!</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
