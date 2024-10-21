import React from 'react'
import whatsapp from "../../assets/whatsapp.png" 
function MarbleShowDown() {
  return (
    <div>
      <div className="m-5 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl font-bold">The Marble ShowDown</h2>

            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>General Rules :</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Only engineering college students are allowed </span></li>
                <li><span className='font-extrabold'>The participant must have their respective college ID cards. </span></li>
                <li><span className='font-extrabold'>Only registered students must participate.</span></li>
                <li><span className='font-extrabold'>Each team consist of 2 members and each team starts with 5 marbles.</span> </li>
                <li><span className='font-extrabold'>A member from each team draw a numbered sheet from a box to determine the order of play and two teams compete against each other.</span></li>
                <li><span className='font-extrabold'>This event contains 5 games and based on the result of each game the team will either gain or loss the marbles.</span></li>
                <li><span className='font-extrabold'>The team with the most the most marbles at the end is declared the overall winner.</span></li>
                <li><span className='font-extrabold'>Participation certificate will be provided to all the  participants.</span></li>

            </ul>

            <div className="text-center mt-5">
                <a href="" className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Sriram B S</b>. </h1>
                <div className="bg-black text-white inline-block px-4 py-2 mt-2 transition-all hover:bg-red-500 hover:rounded-br-3xl hover:text-black">
                    <a className='flex gap-3  items-center' href='https://wa.me/8838206664'>
                        <img src={whatsapp} className='h-7 w-7 object-cover' alt="" />
                        <h1 className='text-xl font-semibold'>8838206664</h1>
                    </a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MarbleShowDown
