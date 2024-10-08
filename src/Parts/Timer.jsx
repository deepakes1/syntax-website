import React, { useState, useEffect } from 'react';

function Timer() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("November 7, 2024 00:00:00");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Countdown to March 1, 2024:</h1>
      <p>
        {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
      </p>
      {countdown.days < 0 && countdown.hours < 0 && countdown.minutes < 0 && countdown.seconds < 0 ? (
        <p>EXPIRED</p>
      ) : null}

      {/* <div className="w-[200px] h-[30px] bg-black">
        
      </div> */}
    </div>


  );
}

export default Timer;