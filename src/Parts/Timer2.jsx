import { useState, useEffect } from 'react';
import { CalendarDays, Users, MapPin, Clock } from 'lucide-react';
import zinnireglogo from "../assets/zinnireglogo.png";
export default function Timer2() {
  const registrationStartTime = new Date("2024-10-26T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [slideAnimation, setSlideAnimation] = useState('');

  function calculateTimeLeft() {
    const difference = registrationStartTime - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }; 
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setSlideAnimation('slide'); // Trigger slide animation for seconds
      setTimeout(() => setSlideAnimation(''), 300); // Remove animation class after animation duration
    }, 1000);

    return () => clearInterval(timer); 
  }, []); 

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-800 text-white">
      <div className="container mx-auto p-5">
        <header className="text-center mb-16">
          <img src={zinnireglogo} className='h-[20vh] w-full object-contain' alt="" />
          <p className="text-2xl mb-4">Government College of Engineering Erode</p>
           <p className="text-xl mb-8">Association of Computer Engineers</p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <CalendarDays className="mr-2" />
              <span>November 7-8, 2024</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>Erode</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2" />
              <span>Network with a spectrum of talented individuals.</span>
            </div>
          </div>
        </header>

        <main>
          <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-center">Registration Opens In</h2>
            <div className="flex justify-center space-x-4 text-center">
              {['days', 'hours', 'minutes', 'seconds'].map((interval) => (
                <div key={interval} className={`bg-indigo-600 rounded-lg p-4 md:w-24 w-[25%] ${interval === 'seconds' ? slideAnimation : ''}`}>
                  <div className="text-4xl font-bold">{timeLeft[interval] || 0}</div>
                  <div className="text-sm uppercase">{interval}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold mb-4">Registration Starts</h3>
            <div className="flex justify-center items-center text-xl">
              <Clock className="mr-2" />
              <span>October 26, 2024 at 12:00 AM</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}