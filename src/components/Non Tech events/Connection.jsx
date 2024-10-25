import React from 'react'
import whatsapp from "../../assets/whatsapp.png" 
import LINK from "../../assets/LINK TOPIa.jpg"
import { Link } from 'react-router-dom'
function Connection() {
  return (
    <div>
      <div className="m-5 mt-24 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className="flex items-center justify-end  mb-4">
        <Link to="/events/NontechList" className="
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
            <h2 className="text-center text-black text-3xl lg:text-4xl font-bold">Connection</h2>

           <div className="flex flex-col-reverse   md:flex-row gap-3">
            <div className="md:w-[40vw] flex flex-col justify-center p-5">
                 <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>General Rules :</p>

                <ul style={{listStyleType : "disc"}} className='text-xl' >
                    <li><span className='font-extrabold'>Only engineering college students are allowed </span></li>
                    <li><span className='font-extrabold'>The participant must have their respective college ID cards. </span></li>
                    <li><span className='font-extrabold'>Only registered students must participate.</span></li>
                    <li><span className='font-extrabold'>Each team consist of 2 members.</span> </li>
                    <li><span className='font-extrabold'>Participants must find the answer by seeing the connected images.</span></li>
                    <li><span className='font-extrabold'>The decision made by the committee will be final.</span></li>
                    <li><span className='font-extrabold'>Certificates will be given to all participants.</span></li>
                </ul>
            </div>
            
            <div className="md:w-[40vw] p-5">
                    <img src={LINK} className='' alt="" />
            </div>
            
           </div>

            <div className="text-center mt-5">
                <a href="https://docs.google.com/forms/d/1o6TQrGWLwhpphtUjfVienQzhobS3q3qOxFhxb_o3rEE/edit" target='_blank' className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Dhinesh S</b> & <b>@Aarthi M</b> </h1>
                <div className="bg-black text-white inline-block px-4 py-2 mt-2 transition-all hover:bg-red-500 hover:rounded-br-3xl hover:text-black">
                    <a className='flex gap-3  items-center' href='https://wa.me/9486639484'>
                        <img src={whatsapp} className='h-7 w-7 object-cover' alt="" />
                        <h1 className='text-xl font-semibold'>9486639484</h1>
                    </a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Connection
