import React, { useState } from 'react';

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

const questions = [
  {
    id: 1,
    question: 'How do I register for the Symposium?',
    answer: 'Register online via the official website or on-site at the venue.',
  },
  {
    id: 2,
    question: 'What are the timings for the Symposium?',
    answer: 'The event will take place from 9:00 AM to 5:00 PM on both November 7th and November 8th, 2024.',
  },
  {
    id: 3,
    question: 'Where is the Symposium being held?',
    answer: 'The Symposium will be held in the Auditorium.',
  },
  {
    id: 4,
    question: 'Who can attend the Symposium?',
    answer: 'The Symposium is exclusively open to engineering students only.',
  },
  {
    id: 5,
    question: 'What are the fees to attend the Symposium?',
    answer: `
Day 1 Only:
i) General Fee: ₹200 per head (Online) or ₹250 per head (On-Spot)
ii) Additional Events: ₹50 per event per head
iii) If participating in Day 2, add ₹100 per head (On-Spot) on Day 2, plus ₹50 per event per head.

Day 2 Only:
i) General Fee: ₹250 per head (On-Spot)
ii) Additional Events: ₹50 per event per head

Both Days (Day 1 & Day 2):
i) General Fee: ₹300 per head
ii) Additional Events: ₹50 per event per head on each day.
    `,
  },
];


  const handleToggle = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="faq-section">
        <h1 className='text-3xl font-bold text-center'>FAQ</h1>
      {questions.map((question) => (
        <div key={question.id} className="faq-question mt-5 p-5" style={{ backgroundColor: 'black', color: 'white', padding: '20px', marginBottom: '5px' }}>
          <div
            className="flex flex-between "
            onClick={() => handleToggle(question.id)}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <h2 style={{ margin: 0, }}>{question.question}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{
                marginLeft: '10px',
                transition: 'transform 0.3s',
                transform: activeQuestion === question.id ? 'rotate(180deg)' : 'rotate(0deg)',
                fill: 'white' // Set the icon color to white
              }}
            >
              {activeQuestion === question.id ? (
                <path d="M12 8l4 4h-8z" /> // Minus icon
              ) : (
                <path d="M8 12h8v2H8z" /> // Plus icon
              )}
            </svg>
          </div>
          {activeQuestion === question.id && (
            <div className="faq-answer" style={{ color: 'white', marginTop: '10px' }}>
              <p>{question.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;