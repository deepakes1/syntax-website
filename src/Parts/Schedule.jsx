import React from 'react';

function Schedule() {
     const events = [
    {
      id: 1,
      name: 'INAUGURAL',
      start: '9:30 AM',
      end: '11:00 AM',
      venue: 'AUDITORIUM',
    },
    {
      id: 2,
      name: 'TECH TALK',
      start: '11:30 AM',
      end: '1:30 PM',
      venue: 'AUDITORIUM',
    },
    {
      id: 3,
      name: 'MYSTERY SQL ROUND 1',
      start: '11:30 AM',
      end: '1:30 PM',
      venue: 'LAB CC1, CC2 (CSE DEPARTMENT)',
    },
    {
      id: 4,
      name: 'MYSTERY SQL ROUND 2',
      start: '2:30 PM',
      end: '4:30 PM',
      venue: 'LAB CC1, CC2 (CSE DEPARTMENT)',
    },
    {
      id: 5,
      name: 'TECH QUIZ',
      start: '11:30 AM',
      end: '1:30 PM',
      venue: 'CLASS-101 (CSE DEPARTMENT)',
    },
    {
      id: 6,
      name: 'CLIP CRAFT',
      start: '11:30 AM',
      end: '1:30 PM',
      venue: 'CLASS-102 (CSE DEPARTMENT)',
    },
    {
      id: 7,
      name: 'LINKTOPIA',
      start: '2:30 PM',
      end: '4:30 PM',
      venue: 'CLASS-101 (CSE DEPARTMENT)',
    },
  ];

  const events1 = [
    {
      id: 1,
      name: 'HACKATHON',
      start: '9:30 AM',
      end: '3:30 PM',
      venue: 'CLASS-104 (CSE DEPARTMENT), SEMINAR HALL',
    },
    {
      id: 2,
      name: 'CODE WARS ROUND 1',
      start: '9:30 AM',
      end: '12:30 PM',
      venue: 'LAB CC1, CC2 (CSE DEPARTMENT)',
    },
    {
      id: 3,
      name: 'CODE WARS ROUND 2',
      start: '2:00 PM',
      end: '3:00 PM',
      venue: 'LAB CC1, CC2 (CSE DEPARTMENT)',
    },
    {
      id: 4,
      name: 'TECHXCELERATE ROUND 1',
      start: '9:30 AM',
      end: '10:30 PM',
      venue: 'CLASS-101 (CSE DEPARTMENT)',
    },
    {
      id: 5,
      name: 'TECHXCELERATE ROUND 2',
      start: '10:30 AM',
      end: '12:00 PM',
      venue: 'CLASS-101 (CSE DEPARTMENT)',
    },
    {
      id: 6,
      name: 'VISUAL DESIGN',
      start: '11:00 AM',
      end: '12:30 PM',
      venue: 'CLASS-103 (CSE DEPARTMENT)',
    },
    {
      id: 7,
      name: 'MEME CREATION',
      start: '2:00 PM',
      end: '3:00 PM',
      venue: 'CLASS-102 (CSE DEPARTMENT)',
    },
    {
      id: 8,
      name: 'SPHERE CLASH',
      start: '2:30 PM',
      end: '3:30 PM',
      venue: 'CLASS-103 (CSE DEPARTMENT)',
    },
  ];

  return (
    <>
    <h1 className='text-4xl font-bold text-center mt-32'>Event Schedule</h1>
    <h1 className='text-3xl font-bold text-center mt-5'>Department of Computer Science and Engineering</h1>
    <h1 className='text-2xl font-bold text-center mt-5'>(The venue and time are subject to change and may vary.)</h1>
    <h1 className='hidden md:block text-4xl font-bold text-center md:mt-5'>Day 1</h1>
    <div className='hidden md:flex justify-center md:mt-5'>
        
      <table border="1">
        <thead>
          <tr>
            <th style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>S.NO</th>
            <th style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>EVENTS</th>
            <th style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>START TIME</th>
            <th style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>END TIME</th>
            <th style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>VENUE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>1</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>INAUGURAL</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>9:30 AM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>11:00 AM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>AUDITORIUM</td>
          </tr>
          <tr>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>2</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>TECH TALK</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>11:30 AM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>1:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>AUDITORIUM</td>
          </tr>
          <tr>
          <td style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>3</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>MYSTERY SQL ROUND 1</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>11:30 AM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>1:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>LAB CC1, CC2 (CSE DEPARTMENT)</td>
          </tr>
          <tr>
          <td style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>4</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>MYSTERY SQL ROUND 2</td>
            <td style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>2:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>4:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>LAB CC1, CC2 (CSE DEPARTMENT)</td>
          </tr>
          
          <tr>
          <td style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>5</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>TECH QUIZ</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>11:30 AM</td>
            <td style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>1:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>CLASS-101 (CSE DEPARTMENT)</td>
          </tr>
          <tr>
          <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>6</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>CLIP CRAFT</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>11:30 AM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>1:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>CLASS-102 (CSE DEPARTMENT)</td>
          </tr>
          <tr>
          <td style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>7</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>LINKTOPIA</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>2:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>4:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>CLASS-101 (CSE DEPARTMENT)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="md:hidden">
        <div className='mt-5'>

      <h1 className='text-4xl font-bold text-center mb-6'>Day 1 Events</h1>
      <div className='flex flex-col items-center p-5'>
        {events.map(event => (
          <div key={event.id} className='border-2 border-black font-bold rounded-tl-3xl rounded-br-3xl p-4 mb-4 w-full max-w-md'>
            <h2 className='font-bold text-lg'>{event.name}</h2>
            <p><strong>Start Time:</strong> {event.start}</p>
            <p><strong>End Time:</strong> {event.end}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

    <h1 className='hidden md:block text-4xl font-bold text-center mt-10'>Day 2</h1>
    <div className='hidden md:flex mt-5 justify-center p-7'>
        
      <table border="1">
        <thead>
          <tr>
            <th style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>S.NO</th>
            <th style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>EVENTS</th>
            <th style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>START TIME</th>
            <th style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>END TIME</th>
            <th style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>VENUE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>1</td>
            <td style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>HACKATHON</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>9:30 AM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>3:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>CLASS-104 (CSE DEPARTMENT), SEMINAR HALL</td>
          </tr>
          <tr>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>2</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>CODE WARS ROUND 1</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>9:30 AM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>12:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>LAB CC1, CC2 (CSE DEPARTMENT)</td>
          </tr>
          <tr>
          <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>3</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>CODE WARS ROUND 2</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>2:00 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>3:00 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>LAB CC1, CC2 (CSE DEPARTMENT)</td>
          </tr>
          <tr>
          <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>4</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>TECHXCELERATE ROUND 1</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>9:30 AM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>10:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>CLASS-101</td>
          </tr>
          
          <tr>
          <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>5</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>TECHXCELERATE ROUND 1</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>10:30 AM</td>
            <td style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>12:00 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>CLASS-101 (CSE DEPARTMENT)</td>
          </tr>
          <tr>
          <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>6</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>VISUAL DESIGN</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>11:00 AM</td>
            <td style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>12:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>CLASS-103 (CSE DEPARTMENT)</td>
          </tr>
          <tr>
          <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>7</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>MEME CREATION</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>2:00 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>3:00 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>CLASS-102 (CSE DEPARTMENT)< /td>
          </tr>
          <tr>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>8</td>
            <td style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>SPHERE CLASH</td>
            <td style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>2:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px",fontWeight:"bolder" }}>3:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px" ,fontWeight:"bolder"}}>CLASS-103(CSE DEPARTMENT)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="md:hidden">
        <div className='mt-10'>
      <h1 className='text-4xl font-bold text-center mb-6'>Day 2 Events</h1>
      <div className='flex flex-col items-center p-5'>
        {events1.map(event => (
          <div key={event.id} className='border-2 border-black font-bold rounded-tl-3xl rounded-br-3xl p-4 mb-4 w-full max-w-md'>
            <h2 className='font-bold text-lg'>{event.name}</h2>
            <p><strong>Start Time:</strong> {event.start}</p>
            <p><strong>End Time:</strong> {event.end}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
    
  );
}

export default Schedule;
