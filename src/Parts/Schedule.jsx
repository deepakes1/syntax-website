import React from 'react';

function Schedule() {
  return (
    <div className='mt-32'>
      <table border="1">
        <thead>
          <tr>
            <th style={{ border: "2px solid black", padding: "10px" }}>S.NO</th>
            <th style={{ border: "2px solid black", padding: "10px" }}>EVENTS</th>
            <th style={{ border: "2px solid black", padding: "10px" }}>START TIME</th>
            <th style={{ border: "2px solid black", padding: "10px" }}>END TIME</th>
            <th style={{ border: "2px solid black", padding: "10px" }}>VENUE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "2px solid black", padding: "10px" }}>1</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>INAUGURAL</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>9:30 AM</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>11:00 AM</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>Auditorium</td>
          </tr>
          <tr>
            <td style={{ border: "2px solid black", padding: "10px" }}>2</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>TECH TALK</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>11:30 AM</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>1:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>Auditorium</td>
          </tr>
          <tr>
          <td style={{ border: "2px solid black", padding: "10px" }}>3</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>MYSTERY SQL ROUND 1</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>11:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>1:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>LAB CC1, CC2</td>
          </tr>
          <tr>
          <td style={{ border: "2px solid black", padding: "10px" }}>4</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>MYSTERY SQL ROUND 2</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>2:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>4:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>LAB CC1, CC2</td>
          </tr>
          
          <tr>
          <td style={{ border: "2px solid black", padding: "10px" }}>5</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>TECH QUIZ</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>11:30 AM</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>1:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>CLASS-101</td>
          </tr>
          <tr>
          <td style={{ border: "2px solid black", padding: "10px" }}>6</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>CLIP CRAFT</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>11:30 AM</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>1:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>CLASS-102</td>
          </tr>
          <tr>
          <td style={{ border: "2px solid black", padding: "10px" }}>7</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>LINKTOPIA</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>2:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>4:30 PM</td>
            <td style={{ border: "2px solid black", padding: "10px" }}>CLASS-101</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
