import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
function PaperPresentation() {
  return (
    <div>
       <div className="m-5 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl  font-bold">Paper Presentation</h2>

            <p className='text-2xl lg:text-3xl mt-5 underline mb-2 font-bold'>General Rules :</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Eligibility :</span> Participants must be currently enrolled students or professionals, depending on the event.</li>
                <li><span className='font-extrabold'>Paper Topic : </span> The topic of the paper must be relevant to the theme or subject of the conference or seminar. It should be an original piece of work or research.</li>
                <li><span className='font-extrabold'>Presentation Duration : </span> Each participant will be allotted a certain time (usually 10-15 minutes) for presenting the paper, followed by a Q&A session (5-10 minutes).</li>
                <li><span className='font-extrabold'>Presentation Format : </span>: Presentations must be in PowerPoint, Google Slides, or any similar format, and need to be submitted before the presentation day.</li>
            </ul>

             <p className='text-2xl lg:text-3xl mt-5 mb-2 underline font-bold'>Participant Instructions :</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Preparation :</span> Ensure your paper is ready well before the deadline. Practice your presentation to manage time effectively.</li>
                <li><span className='font-extrabold'>Presentation Slides : </span> Limit the number of slides (usually 10-12 slides for a 10-15 minute presentation).Keep slides simple, with minimal text and more visual aids (charts, graphs, etc.)</li>
                <li><span className='font-extrabold'>Submission Deadline:  </span> Submit both your paper and slides by the specified deadline to avoid disqualification.</li>
                <li><span className='font-extrabold'>On the Day of Presentation :  </span>: Arrive early to test the equipment and ensure everything works. Stick to the time limit. Speak clearly and confidently, making sure to engage with the audience.</li>
                <li><span className='font-extrabold'>Q & A Etiquette :   </span>: Be prepared to answer questions about your paper.</li>
                <li><span className='font-extrabold'>Judging Criteria : </span>: <br />1. Originality and relevance of the research  <br /> 2. Clarity and structure of the paper <br />3. o	Presentation skills (clarity, engagement, time management) <br /> 4. Handling of Q&A session.</li>

            </ul>

            <div className="text-center mt-5">
                <a href="" className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Raghul M</b>. </h1>
                <div className="bg-black text-white inline-block px-4 py-2 mt-2 transition-all hover:bg-red-500 hover:rounded-br-3xl hover:text-black">
                    <a className='flex gap-3  items-center' href='https://wa.me/918870142189'>
                        <img src={whatsapp} className='h-7 w-7 object-cover' alt="" />
                        <h1 className='text-xl font-semibold'>8870142189</h1>

                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PaperPresentation
