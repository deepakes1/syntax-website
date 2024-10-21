import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
function ProjectExpo() {
  return (
    <div>
             <div className="m-5 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl  font-bold">Paper Presentation</h2>

            <p className='text-2xl lg:text-3xl mt-5 underline mb-2 font-bold'>General Rules :</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Team Size :</span> Max 3 members per team.</li>
                <li><span className='font-extrabold'>Setup : </span> Arrive 30 minutes early. Ensure all required hardware/software is ready.</li>
                <li><span className='font-extrabold'>Judging Criteria :</span>Innovation, Technical Complexity, Practicality, Presentation, and Team Collaboration.</li>
                <li><span className='font-extrabold'>Communication  :  </span>Report any technical or logistical issues to coordinators.</li>
                <li><span className='font-extrabold'>Conduct :  </span>Maintain professionalism. Plagiarism or any unethical conduct will result in disqualification.</li>
                <li><span className='font-extrabold'>Awards :  </span>Categories include Best Innovation, Best Technical Solution, and Audience Favourite.</li>

            </ul>

             
            <div className="text-center mt-5">
                <a href="https://docs.google.com/forms/d/1longhzGNqbMuhV7yqxk24ImegihA8B21q-W8H-4fUjY/edit" target='_blank' className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Deepak ES</b> & <b>@Varshini G</b>. </h1>
                <div className="bg-black text-white inline-block px-4 py-2 mt-2 transition-all hover:bg-red-500 hover:rounded-br-3xl hover:text-black">
                    <a className='flex gap-3  items-center' href='https://wa.me/9944505576'>
                        <img src={whatsapp} className='h-7 w-7 object-cover' alt="" />
                        <h1 className='text-xl font-semibold'>9944505576</h1>

                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProjectExpo
