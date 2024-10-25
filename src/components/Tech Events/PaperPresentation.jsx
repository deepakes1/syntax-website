import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
import paper from "../../assets/TECH TALK.jpg"
import { Link } from 'react-router-dom'
function PaperPresentation() {
  return (
    <div>
       <div className="m-5 mt-32 lg:mt-20 lg:w-[80vw] lg:mx-auto font-semibold">
       <div className="flex items-center justify-end  mb-4">
        <Link to="/events/tech" className="
          flex items-center 
          bg-black text-white 
          px-4 py-2 
          rounded-md 
          transition duration-300 
          ease-in-out 
        ">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          <p className='font-bold'>Back</p>
        </Link>
      </div>
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl  font-bold">Paper Presentation</h2>

            <div className="flex  flex-col-reverse  md:flex-row gap-3">
                <div className="md:w-[40vw]">
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
                </div>


                 <div className="md:w-[40vw] p-5">
                    <img src={paper} className='' alt="" />
                </div>
            </div>

            <div className="">
            <h1 className=' text-black text-3xl lg:text-4xl mb-4 font-bold'>Topics for Paper Presentation</h1>
                <ul style={{listStyleType : "disc"}} className='text-xl' >
                        <li><span className='font-extrabold'>Applications of Data Science in Finance</span></li>
                        <li><span className='font-extrabold'>Artificial intelligence and Machine Learning.</span></li>
                        <li><span className='font-extrabold'>IOT and smart home automation .</span></li>
                        <li><span className='font-extrabold'>Blockchain potential in social networking platforms.</span></li>
                        <li><span className='font-extrabold'>Virtual reality and Augmented reality </span></li>
                        <li><span className='font-extrabold'>The future of passwords - alternatives and innovations for secure authentication</span></li>
                        <li><span className='font-extrabold'>Serverless Computing - Case study</span></li>
                        <li><span className='font-extrabold'>5G networks and their impacts</span></li>            
                        <li><span className='font-extrabold'>Green Computing </span></li>
                        <li><span className='font-extrabold'>Crypto craze - The future of money management</span></li>            
            

                    </ul>
            </div>

            <div className="text-center mt-5">
                <a href="https://docs.google.com/forms/d/1kLNeodg2spp3Cncnx0O3H0HETxdFdkiYyDWoELFIn7Y/edit" target='_blank' className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

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
