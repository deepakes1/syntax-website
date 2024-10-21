import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
function PaperPresentation() {
  return (
    <div>
       <div className="m-5 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl  font-bold">Paper Presentation</h2>

            <p className='text-2xl lg:text-3xl mt-5 underline mb-2 font-bold'>General Rules :</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Team Composition & Eligibility :</span> Teams can have 1 to 3 participants. Only registered Engineering college students can participate; ID cards are required.</li>
                <li><span className='font-extrabold'>Presentation Time Limit: </span>Teams will have 5-10 minutes for the presentation, followed by a Q&A session. Participation certificates will be given to all. </li>
                <li><span className='font-extrabold'>Abstract & Paper Submission :</span> Abstracts (max 250 words) and papers (max 15 pages) must be emailed to csesyntax@gmail.com with the domain and sub-category in the subject line.</li>
                <li><span className='font-extrabold'>Final Paper Submission :</span> Papers must include a cover page with title, team members' names, college details, contact numbers, and email IDs.</li>
                <li><span className='font-extrabold'>Submission Guidelines: </span>Email abstracts, papers, and presentations (PPT) to csesyntax@gmail.com. Contact the same email for any difficulties.</li>
                <li><span className='font-extrabold'>Judges' Decision :</span> The decision of the judges is final. No arguments or appeals will be entertained.</li>
                <li><span className='font-extrabold'>Submission Deadline :</span> The soft copy of your final paper must be submitted via email one day prior to the presentation.</li>
                <li><span className='font-extrabold'>Event Details : </span>: Topics will be announced on the official website. Only Engineering college students are eligible to participate.</li>            
            </ul>

            <div className="text-center mt-5">
                <a href="" className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator <b>@Raghul M</b> & <b>@Preethi S</b> </h1>
                <div className="bg-black text-white inline-block px-4 py-2 mt-2 transition-all hover:bg-red-500 hover:rounded-br-3xl hover:text-black">
                    <a className='flex gap-3  items-center' href='https://wa.me/918870142189'>
                        <img src={whatsapp} className='h-7 w-7 object-cover' alt="" />
                        <h1 className='text-xl font-semibold'>8870142189</h1>

                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PaperPresentation
