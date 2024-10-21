import React from 'react'
import whatsapp from "../../assets/whatsapp.png" 
function Flipbottle() {
  return (
    <div>
      <div className="m-5 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl font-bold">Flip The Bottle</h2>

            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>General Rules :</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Only engineering college students are allowed </span></li>
                <li><span className='font-extrabold'>The participant must have their respective college ID cards. </span></li>
                <li><span className='font-extrabold'>Only registered students must participate.</span></li>
                <li><span className='font-extrabold'>Each team consists of 2 members.</span> </li>
                <li><span className='font-extrabold'>There will be no individual participants.</span></li>
                <li><span className='font-extrabold'>Hold the bottle on the top of the neck.</span></li>
                <li><span className='font-extrabold'>If the bottle doesn’t land upright or falls over, the flipped bottled doesn’t take a count.</span></li>
                <li><span className='font-extrabold'>The bottle must rotate at least once before landing.</span></li>
                <li><span className='font-extrabold'>The winner team can play with the opponent team for the next round.</span></li>
                <li><span className='font-extrabold'>This event contains 4 rounds which based on the results of each game and will move to next round.</span></li>
                <li><span className='font-extrabold'>The last round can determine the overall winner.</span></li>
                <li><span className='font-extrabold'>Participation certificate will be provided to all the  participants.</span></li>

            </ul>

            <div className="text-center mt-5">
                <a href="" className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Lokeshwaran M</b> & <b>@Kalpana Chawla M</b> </h1>
                <div className="bg-black text-white inline-block px-4 py-2 mt-2 transition-all hover:bg-red-500 hover:rounded-br-3xl hover:text-black">
                    <a className='flex gap-3  items-center' href='https://wa.me/9361225923'>
                        <img src={whatsapp} className='h-7 w-7 object-cover' alt="" />
                        <h1 className='text-xl font-semibold'>9361225923</h1>
                    </a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Flipbottle
