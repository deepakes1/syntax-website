import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
import sql from "../../assets/MYSTERY SQL.jpg"
import { Link } from 'react-router-dom'
function Sql() {
  return (
    <div>
      <div className="m-5  mt-32 lg:mt-20  lg:w-[80vw] lg:mx-auto font-semibold">
      <div className="flex items-center justify-end mb-4">
        <Link to="/events/tech" className="
          flex items-center 
          bg-black text-white 
          px-4 py-2 
          rounded-md 
          transition duration-300 
          ease-in-out 
        ">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          <p className='font-bold'>Back</p>
        </Link>
      </div>
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl font-bold">Mystery SQL</h2>

            <div className="flex flex-col-reverse  md:flex-row gap-3">
                <div className="md:w-[40vw]">
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
                </div>

                <div className="md:w-[40vw] p-5">
                    <img src={sql} className='' alt="" />
                </div>
            </div>

            <div className="text-center mt-5">
                <a href="https://docs.google.com/forms/d/1TKNf_p_v20arsi7RKmQ1QRo3EodxZNR_VNXqH0lKA3Q/edit" target='_blank' className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Dakshin Srinivas M S</b> & <b>@Keerthana V</b>. </h1>
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
