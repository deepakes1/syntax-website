import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
function Coding() {
  return (
    <div className="m-5 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl font-bold">Coding + Reverse Coding + Debugging</h2>

            <p className='text-2xl lg:text-3xl mt-3 text-center font-semibold'>Round 1 :Coding Round</p>

            <p className='text-2xl lg:text-2xl  mt-3  font-bold'>Objective:</p>
            <p className='text-xl lg:text-xl mt-2'>Participants will solve traditional coding problems using a <b>programming language of their choice</b> (C, Java, Python, etc.). This round tests algorithmic and problem-solving skills.</p>

            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>Instructions:</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Problem Selection :</span> Provide 2–3 problems with varying difficulty levels (Easy, Medium, Hard).</li>
                <li><span className='font-extrabold'>Time Limit :</span> Allocate 1–2 hours based on the difficulty of the problems.</li>
                <li><span className='font-extrabold'>Platform :</span> If feasible, use an online judge or local environment for compiling and testing code.</li>
                <li><span className='font-extrabold'>Evaluation :</span>Automatic evaluation through test cases. Points will be awarded for correctness and efficiency (time/space complexity).</li>

            </ul>

            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>Rules:</p>
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li>Each problem has a specific score based on its difficulty.</li>
                <li>Partial marks can be awarded for passing some test cases.</li>
                <li>No plagiarism. If two or more codes are suspiciously similar, they will be disqualified.</li>
            </ul>

            <p className='text-2xl lg:text-3xl mt-10 text-center font-semibold'>Round 2 : Reverse Coding Round</p>
             <p className='text-2xl lg:text-2xl  mt-3  font-bold'>Objective:</p>
            <p className='text-xl lg:text-xl mt-2'>Participants will be given output or behaviour of a program, and they need to write the program that produces the given output. This tests logic and understanding of algorithms.</p>

            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>Instructions:</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Problem Structure :</span> Provide an output or a set of behaviors that the program must exhibit. Participants should deduce the logic/code from the output.</li>
                <li><span className='font-extrabold'>Time Limit :</span> 1 hour for 2–3 reverse coding problems</li>
                <li><span className='font-extrabold'>Evaluation :</span> Participants submit the code that generates the required output. Points are awarded based on correctness and code efficiency.</li>
            </ul>

            <p className='text-2xl lg:text-3xl mt-10 text-center font-semibold'>Round 3: Debugging Round</p>
            <p className='text-2xl lg:text-2xl  mt-3  font-bold'>Objective:</p>
            <p className='text-xl lg:text-xl mt-2'>Participants will be given buggy code, and they need to identify and fix the bugs. This round tests problem-solving skills and knowledge of programming syntax and logic.</p>

            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>Instructions:</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Buggy Code:</span> Provide programs that have common logical, syntactical, or run-time errors.</li>
                <li><span className='font-extrabold'>Time Limit :</span> 1 hour for fixing 3–5 buggy programs.</li>
                <li><span className='font-extrabold'>Evaluation :</span> : Points will be awarded based on the number of bugs identified and corrected.</li>
            </ul>
            <p className='text-2xl lg:text-2xl mt-5 mb-2 font-bold'>Rules:</p>
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li>Points will be deducted for incorrect fixes or failing to correct critical bugs.</li>
                <li>Each program has a maximum score, which is awarded if all bugs are fixed.</li>
                <li>The use of debuggers is allowed.</li>
            </ul>

            <h1 className='text-3xl font-black mb-3 mt-10 underline'>General Rules for the Event</h1>
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-bold'>Team Structure :</span> Participants can compete only individually.</li>
                <li><span className='font-bold'>Language Choice: </span> Participants may code in any language of their choice unless specified by the event.</li>
                <li><span className='font-bold'>Time Limits: </span> Adherence to time limits is crucial. Late submissions will not be accepted.</li>
                <li><span className='font-bold'>Environment Setup: </span> Ensure all necessary software (IDEs, compilers) are set up before the event starts.</li>
                <li><span className='font-extrabold mb-2'>Judging Criteria:</span><br /> <span className='font-bold mb-2'>1. Coding Round </span> -  Accuracy, efficiency, and completeness of code. <br /> <span className='font-bold mb-2'>2. Reverse Coding Round :</span> Accuracy of the code in producing the correct output and the logic used. <br /> <span className='font-bold mb-2'>3. Debugging Round :</span>  Number of bugs fixed, accuracy, and any extra points for optimizing.</li>
                <li><span className='font-bold'>Disqualification: </span>  Any form of cheating, plagiarism, or rule violation will lead to disqualification.</li>
                <li><span className='font-bold'>Resources Allowed: </span> No external help like searching the web, but participants can refer to standard language documentation if needed.</li>
            </ul>

             <p className='text-2xl lg:text-3xl mt-10 mb-5 underline font-semibold'>Event Flow :</p>
             <ol style={{listStyleType : "number"}} className='text-xl' >
                <li><span className='font-bold'>Round 1 : </span> All participants compete in coding.</li>
                <li><span className='font-bold'>Elimination : </span> Top N participants move to the next round.</li>
                <li><span className='font-bold'>Round 2 : </span> Remaining participants solve reverse coding problems.</li>
                <li><span className='font-bold'>Elimination: </span> Further narrowing down of participants.</li>
                <li><span className='font-extrabold mb-2'>Judging Criteria:</span><br /> <span className='font-bold mb-2'>1. Coding Round </span> -  Accuracy, efficiency, and completeness of code. <br /> <span className='font-bold mb-2'>2. Reverse Coding Round :</span> Accuracy of the code in producing the correct output and the logic used. <br /> <span className='font-bold mb-2'>3. Debugging Round :</span>  Number of bugs fixed, accuracy, and any extra points for optimizing.</li>
                <li><span className='font-bold'>Disqualification : </span>  Any form of cheating, plagiarism, or rule violation will lead to disqualification.</li>
                <li><span className='font-bold'>Round 3 : </span> Finalists debug programs. The highest scoring participants win the event.</li>
            </ol>

            <div className="text-center mt-5">
                <a href="" className='bg-black text-lg text-white px-4 py-2 transition-all hover:rounded-xl'>Register Now!</a>

            </div>
            <div className="mt-5">
                <h1 className='text-xl'>For inquiries, please contact our coordinator @muralitharan. </h1>
                <div className="bg-black text-white inline-block px-4 py-2 mt-2 transition-all hover:bg-red-500 hover:rounded-br-3xl hover:text-black">
                    <a className='flex gap-3  items-center' href='https://wa.me/9345479547'>
                        <img src={whatsapp} className='h-7 w-7 object-cover' alt="" />
                        <h1 className='text-xl font-semibold'>9345479547</h1>

                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Coding
