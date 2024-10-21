import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
function TechnicalGame() {
  return (
    <div>
      <div className="m-5 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl  font-bold">Technical Game</h2>

            <p className='text-2xl lg:text-3xl mt-5 underline mb-2 font-bold'>Rules: </p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>A valid College ID card is mandatory.</span></li>
                <li><span className='font-extrabold'>Only engineering students are allowed to participate.</span></li>
                <li><span className='font-extrabold'>Only registered students may participate in the event</span></li>
                <li><span className='font-extrabold'>A laptop is required for playing the games on our website.</span></li>
                <li><span className='font-extrabold'>There are 2 rounds, with each round consisting of 3 games.</span></li>
                <li><span className='font-extrabold'>Only eligible students from the 1st round are allowed to participate in the 2nd round.</span></li>
                <li><span className='font-extrabold'>Instructions for each game will be announced before the game begins.</span></li>
                <li><span className='font-extrabold'>Once a game has been played, the participant cannot replay it.</span></li>
                <li><span className='font-extrabold'>Any form of malpractice will result in immediate disqualification.</span></li>
                <li><span className='font-extrabold'>All participants will receive a participation certificate, and the top 3 winners will be awarded.</span></li>

            
            </ul>

             


            <div className="text-center mt-5">
                <a href="" className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Dhanush G T</b>. </h1>
                <div className="bg-black text-white inline-block px-4 py-2 mt-2 transition-all hover:bg-red-500 hover:rounded-br-3xl hover:text-black">
                    <a className='flex gap-3  items-center' href='https://wa.me/9514500971'>
                        <img src={whatsapp} className='h-7 w-7 object-cover' alt="" />
                        <h1 className='text-xl font-semibold'>9514500971</h1>

                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TechnicalGame
