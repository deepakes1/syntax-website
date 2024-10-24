import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
function Memecreation() {
  return (
    <div>
      <div className="m-5 mt-16 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl font-bold">Video Editing</h2>

            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>General Rules :</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Only engineering college students are allowed.</span></li>
                <li><span className='font-extrabold'>Only the registered students are allowed to participate </span></li>
                <li><span className='font-extrabold'>Contestants must wear their respective college ID cards</span></li>
                <li><span className='font-extrabold'>The contest has two rounds.</span></li>
                <li><span className='font-extrabold'>In first round, participants should create a meme based on the given scenario in particular time given.</span></li>
                <li><span className='font-extrabold'>The second round is story telling using meme, in which the contestant should convey a valuable story with meme creation.</span></li>
                <li><span className='font-extrabold'>The evaluation is based on creativity, and humor.</span></li>
                <li><span className='font-extrabold'>Using vulgar and adult words or contents in the meme is strictly prohibited.</span></li>
                <li><span className='font-extrabold'>Meme should not contain templates from Google.</span></li>
                <li><span className='font-extrabold'>Meme creation should be done only using the “meme template” app.</span></li>
                <li><span className='font-extrabold'>Team can have only 2 members.</span></li>
            </ul>

            <div className="text-center mt-5">
                <a href="https://docs.google.com/forms/d/1kEXITvpDWeYhTU1NSQ9CzoM13R0onrS7D-3kf0vA-IQ/edit" target='_blank' className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Abishek M</b> & <b>@Asma L </b> </h1>
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

export default Memecreation
