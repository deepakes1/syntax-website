import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
function Sql() {
  return (
    <div>
      <div className="m-5 lg:w-[40vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl font-bold">Technical Quiz</h2>

            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold underline'>General Rules :</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>The participants must have a hackerrank account (For qualification round).</span></li>
                <li><span className='font-extrabold'>Only Engineering College Students are allowed.</span></li>
                <li><span className='font-extrabold'>College ID Card is must.</span></li>
                <li><span className='font-extrabold'>Participation certificate will be provided to all the participants.</span></li>
                <li><span className='font-extrabold'>The participants must not switch tabs during the test.</span></li>
                <li><span className='font-extrabold'>Systems are available and participants can bring their own laptops if needed.</span></li>
                <li><span className='font-extrabold'>2nd (final) round will be conducted in our custom created website.</span></li>
                <li><span className='font-extrabold'>Participants must login to the website with their email ids.</span></li>
            </ul>

            <div className="text-center mt-5">
                <a href="" className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Dakshin Srinivas M S</b>. </h1>
                <div className="bg-black text-white inline-block px-4 py-2 mt-2 transition-all hover:bg-red-500 hover:rounded-br-3xl hover:text-black">
                    <a className='flex gap-3  items-center' href='https://wa.me/9360145819'>
                        <img src={whatsapp} className='h-7 w-7 object-cover' alt="" />
                        <h1 className='text-xl font-semibold'>9360145819</h1>

                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Sql
