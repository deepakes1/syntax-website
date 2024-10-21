import React from 'react'
import whatsapp from "../../assets/whatsapp.png"

function TechnicalQuiz() {
  return (
    <div>
       <div className="m-5 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl font-bold">Technical Quiz</h2>

            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>General Rules :</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Only Engineering College Students are allowed.</span> </li>
                <li><span className='font-extrabold'>College ID Card is must.</span></li>
                <li><span className='font-extrabold'>Only Registered Students are able to participate in the event.</span></li>
                <li><span className='font-extrabold'>Laptop or Mobile is preferred to attend the Technical Quiz. </span></li>
                <li><span className='font-extrabold'>Quiz contains Minimum of 2 rounds or a Maximum of 3 rounds (in worst case). </span></li>
                <li><span className='font-extrabold'>Based on the performance of participants, 3 candidates will be selected as winners. </span></li>
                <li><span className='font-extrabold'>Participants are expected to work individually and are not allowed leave the quiz area until the event is over.</span></li>
                <li><span className='font-extrabold'>Participation Certificate will be provided to all the participants. </span></li>

            </ul>

            <div className="text-center mt-5">
                <a href="" className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@ Sandra Sirenjeevi S</b> & <b>@Brintha Shree S S</b></h1>
                <div className="bg-black text-white inline-block px-4 py-2 mt-2 transition-all hover:bg-red-500 hover:rounded-br-3xl hover:text-black">
                    <a className='flex gap-3  items-center' href='https://wa.me/6374194200'>
                        <img src={whatsapp} className='h-7 w-7 object-cover' alt="" />
                        <h1 className='text-xl font-semibold'>6374194200</h1>

                    </a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TechnicalQuiz
