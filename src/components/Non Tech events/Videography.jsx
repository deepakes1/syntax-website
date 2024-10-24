import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
function Videography() {
  return (
    <div>
      <div className="m-5 mt-16 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl font-bold">Video Editing</h2>

            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>General Rules :</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Only engineering college students are allowed </span></li>
                <li><span className='font-extrabold'>The participant must have their respective college ID cards. </span></li>
                <li><span className='font-extrabold'>Only registered students must participate.</span></li>
                <li><span className='font-extrabold'>The use of AI tool in Editing is Strictly Prohibited.</span></li>
                <li><span className='font-extrabold'>Editing should be done on-site within the campus.</span></li>
                <li><span className='font-extrabold'>We will provide the video on the day of the event.</span></li>
                <li><span className='font-extrabold'>Editing software’s such as After Effects, Premium pro is allowed for laptops & all editing software’s for mobile is permitted.</span></li>
                <li><span className='font-extrabold'>The duration of the edited video should be within 30 seconds.</span></li>
                <li><span className='font-extrabold'>Editing time starts at 11:30 AM and deadline for submission is 1:30 PM.</span></li>
                <li><span className='font-extrabold'>Video Evaluation is based on creativity and editing.</span></li>
                <li><span className='font-extrabold'>Participation Certificate will be provided to all Participants. </span></li>

            </ul>

            <div className="text-center mt-5">
                <a href="https://docs.google.com/forms/d/1kEXITvpDWeYhTU1NSQ9CzoM13R0onrS7D-3kf0vA-IQ/edit" target='_blank' className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Kiruthikroshan M</b> & <b>@Bhuvanasri G K </b> </h1>
                <div className="bg-black text-white inline-block px-4 py-2 mt-2 transition-all hover:bg-red-500 hover:rounded-br-3xl hover:text-black">
                    <a className='flex gap-3  items-center' href='https://wa.me/9361475870'>
                        <img src={whatsapp} className='h-7 w-7 object-cover' alt="" />
                        <h1 className='text-xl font-semibold'>9361475870</h1>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Videography
