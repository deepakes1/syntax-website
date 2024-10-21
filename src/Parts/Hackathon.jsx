import React from 'react'
import whatsapp from "../assets/whatsapp.png"
function Hackathon() {
  return (
    <div>
     <div className="m-5 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl  font-bold">Hackathon</h2>

            <p className='text-2xl lg:text-3xl mt-5 underline mb-2 font-bold'>Rules: </p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>One classroom with proper seating arrangement and maybe increased according to the no. of teams.</span></li>
                <li><span className='font-extrabold'>Minimum of four junction box for charging since the event lasts for more than 6 hours.</span></li>
                <li><span className='font-extrabold'>Router and ethernet cable to provide uninterrupted network connection</span></li>
                <li><span className='font-extrabold'>Six volunteers to supervise the event.</span></li>
                <li><span className='font-extrabold'>One or two staff members for the judgements.</span></li>
                <li><span className='font-extrabold'>Minimum 2 laptop with the port for ethernet cable to provide network connection.</span></li>
            
            </ul>

             


            <div className="text-center mt-5">
                <a href="https://docs.google.com/forms/d/1wBKJ9FKvDUTOqV9enMysDYb7-CGP0UFuN55ys_8OR8A/edit#settings" target='_blank' className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Sudhakar S</b> </h1>
                <div className="bg-black text-white inline-block px-4 py-2 mt-2 transition-all hover:bg-red-500 hover:rounded-br-3xl hover:text-black">
                    <a className='flex gap-3  items-center' href='https://wa.me/6382654779'>
                        <img src={whatsapp} className='h-7 w-7 object-cover' alt="" />
                        <h1 className='text-xl font-semibold'>6382654779</h1>

                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hackathon
