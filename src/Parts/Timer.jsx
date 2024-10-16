import { useState, useEffect } from 'react';

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
      
      {countdown.days < 0 && countdown.hours < 0 && countdown.minutes < 0 && countdown.seconds < 0 ? (
        <p>EXPIRED</p>
      ) : null}

      <div className="flex flex-col items-center text-[#40377D] font-bold text-lg">
        <div className="flex">
        
        <div  className="  border-black text-center w-[100px] p-5 border-b-2 border-r-2">
          <h1 className='text-4xl'>{countdown.days}</h1>
          <p>Days</p>
        </div>
        <div className=" border-black text-center w-[100px] p-5 border-b-2 ">
          <h1 className='text-4xl'>{countdown.hours}</h1>
          <p>Hours</p>
        </div>
      </div>
      <div className="flex">
        
        <div className="border-black w-[100px] text-center p-5  border-r-2 ">
          <h1 className='text-4xl'>{countdown.minutes}</h1>
          <p>Minutes</p>
        </div>
        <div className="p-5 text-center w-[100px]">
          <h1 className='text-4xl'>{countdown.seconds}</h1>
          <p >Seconds</p>
        </div>
      </div>
      </div>

    </div>


  );
}

export default Timer;

