import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
function Videography() {
  return (
    <div>
      <div className="m-5 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl font-bold">Videography</h2>

            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>General Rules :</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Only engineering college students are allowed </span></li>
                <li><span className='font-extrabold'>The participant must have their respective college ID cards. </span></li>
                <li><span className='font-extrabold'>Only registered students must participate.</span></li>
                <li><span className='font-extrabold'>The Video should be taken only in Android Mobile phone and the use of cameras and iphones are strictly prohibited.</span> </li>
                <li><span className='font-extrabold'>The Video should be taken within the campus.</span></li>
                <li><span className='font-extrabold'>Any form of editing tools is allowed and use of ai tools in editing is strictly prohibited.</span></li>
                <li><span className='font-extrabold'>The durations of the video should be within 30 to 45 seconds</span></li>
                <li><span className='font-extrabold'>Video evaluation is based on creativity, composition and editing.</span></li>
                <li><span className='font-extrabold'>Participation certificate will be provided to all the  participants.</span></li>

            </ul>

            <div className="text-center mt-5">
                <a href="" className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Kiruthikroshan M</b>. </h1>
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
