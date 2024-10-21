import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
function Coding() {
  return (
    <div className="m-5 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl font-bold">Coding</h2>
            <p className='text-2xl lg:text-2xl  mt-3 mb-4 font-bold'>Rules:</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Coding must be done in the programming language by your choice e.g., C, C++, Java, Python.</span> </li>
                <li><span className='font-extrabold'>Participants will use an online coding platform HackerRank so all are must have an account HackerRank.</span></li>
                <li><span className='font-extrabold'>Strictly prohibited. Any form of cheating or copying will lead to immediate disqualification.</span></li>
                <li><span className='font-extrabold'>No communication with other participants or use of external resources during the event. </span></li>
                <li><span className='font-extrabold'>Participants should bring their own laptops and chargers (Optional). Internet and power supply will be provided at the venue.</span></li>
                <li><span className='font-extrabold'>Solutions must be submitted within the time limit. Late submissions will not be accepted.</span></li>
                <li><span className='font-extrabold'>The decision of the judges will be final.</span></li>

            </ul>

            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>Guidelines:</p>
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li>Prior registration is required, either online or at the venue, before the event starts.</li>
                <li>Participants must carry their college ID card.</li>
                <li>Participants must arrive at the venue at least 15 minutes before the event starts.</li>
                <li>Participants are expected to behave professionally and respect the rules of the event.</li>
                <li>Read each problem statement carefully before attempting to solve it.</li>
                <li>Solutions must be submitted within the time limit. Late submissions will not be accepted.</li>
                <li>Communication with other participants and cheating is strictly prohibited and will lead to immediate disqualification.</li>
                <li>If any technical issues arise, inform the event organizers immediately.</li>
                <li>The decision of the judges will be final.</li>
                <li>Participate certificate will be provided to all participants.</li>
          
            </ul>

            
            <div className="text-center mt-5">
                <a href="" className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Muralitharan</b>. </h1>
                <div className="bg-black text-white inline-block px-4 py-2 mt-2 transition-all hover:bg-red-500 hover:rounded-br-3xl hover:text-black">
                    <a className='flex gap-3  items-center' href='https://wa.me/9345479547'>
                        <img src={whatsapp} className='h-7 w-7 object-cover' alt="" />
                        <h1 className='text-xl font-semibold'>9345479547</h1>

                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Coding
