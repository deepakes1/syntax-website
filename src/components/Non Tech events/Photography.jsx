import React from 'react'
import whatsapp from "../../assets/whatsapp.png" 

function Photography() {
  return (
    <div>
       <div className="m-5 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl font-bold">Photography</h2>

            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>General Rules :</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Only engineering college students are allowed </span></li>
                <li><span className='font-extrabold'>The participant must have their respective college ID cards. </span></li>
                <li><span className='font-extrabold'>Only registered students must participate.</span></li>
                <li><span className='font-extrabold'>The picture should be taken only in Android Mobile phone.</span> </li>
                <li><span className='font-extrabold'>Must enable the camera settings "TIMESTAMP" and "MODEL" watermark.</span></li>
                <li><span className='font-extrabold'>The picture should be taken within the campus.</span></li>
                <li><span className='font-extrabold'>Editing is allowed. Manipulation is strictly prohibited.</span></li>
                <li><span className='font-extrabold'>If demanded, participants must produce the original soft copy of the photo for verification.</span></li>
                <li><span className='font-extrabold'>Must provide your thought on picture as Caption of Image.</span></li>
                <li><span className='font-extrabold'>Photo evaluation would be based on Creativity, Composition and Editing.</span></li>
                <li><span className='font-extrabold'>Participation certificate will be provided to all the  participants.</span></li>

            </ul>

            <div className="text-center mt-5">
                <a href="https://docs.google.com/forms/d/1vQS8mbd7tay1jIsvp3VeOzX6mRYNUmWmJj7XrdJyDog/edit" target='_blank' className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Abishek N</b> & <b>@Asma L</b> </h1>
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

export default Photography
