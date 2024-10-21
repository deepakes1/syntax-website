import React from 'react'
import whatsapp from "../../assets/whatsapp.png"

function TechnicalQuiz() {
  return (
    <div>
       <div className="m-5 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl font-bold">Technical Quiz</h2>

            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>General Rules :</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Participants :</span> This event permits only one participant per registration</li>
                <li><span className='font-extrabold'>No External Help : </span> Use of external help such as books, notes, internet searches, or communication with others is usually prohibited.</li>
                <li><span className='font-extrabold'>One Attempt Only : </span> Participants typically get only one chance to submit their answers for each question.</li>
                <li><span className='font-extrabold'>Scoring : </span> Points are awarded for correct answers, and there may or may not be negative marking for incorrect ones. This is usually specified in advance.</li>
                <li><span className='font-extrabold'>Tie-breaking : </span> In the event of a tie, tie-breaking procedures may include extra questions or consideration of the time taken to complete the quiz.</li>
                <li><span className='font-extrabold'> Platform-Specific Rules : </span>If the quiz is conducted online, platform-specific rules (such as no switching between windows/tabs) may apply.</li>
                <li><span className='font-extrabold'>Technical Issues : </span> Participants are expected to report any technical issues immediately. Depending on the rules, a decision may be made whether to reattempt or proceed.</li>
                <li><span className='font-extrabold'>Fair Play :  </span>Any form of cheating or unfair advantage will result in disqualification or penalties.</li>

            </ul>

            <div className="text-center mt-5">
                <a href="" className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Sirenjeevi</b>. </h1>
                <div className="bg-black text-white inline-block px-4 py-2 mt-2 transition-all hover:bg-red-500 hover:rounded-br-3xl hover:text-black">
                    <a className='flex gap-3  items-center' href='https://wa.me/6374194200'>
                        <img src={whatsapp} className='h-7 w-7 object-cover' alt="" />
                        <h1 className='text-xl font-semibold'>6374194200</h1>

                    </a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TechnicalQuiz
