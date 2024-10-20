import React from 'react'

function Coding() {
  return (
    <div className="m-5 lg:w-[80vw] lg:mx-auto">
        <div className='p-5' >
            <h2 className="text-center text-black text-2xl lg:text-4xl font-semibold">Coding + Reverse Coding + Debugging</h2>

            <p className='text-xl lg:text-3xl mt-3 text-center font-semibold'>Coding Round</p>

            <p className='text-xl lg:text-2xl  mt-3  font-semibold'>Objective:</p>
            <p className='lg:text-xl mt-2'>Participants will solve traditional coding problems using a <b>programming language of their choice</b> (C, Java, Python, etc.). This round tests algorithmic and problem-solving skills.</p>

            <p className='text-xl lg:text-2xl mt-5 mb-2 font-semibold'>Instructions:</p>

            <ul style={{listStyleType : "disc"}} className='lg:text-xl' >
                <li><span className='font-bold'>Problem Selection:</span> Provide 2–3 problems with varying difficulty levels (Easy, Medium, Hard).</li>
                <li><span className='font-bold'>Time Limit:</span> Allocate 1–2 hours based on the difficulty of the problems.</li>
                <li><span className='font-bold'>Platform:</span> If feasible, use an online judge or local environment for compiling and testing code.</li>
                <li><span className='font-bold'>Evaluation:</span>Automatic evaluation through test cases. Points will be awarded for correctness and efficiency (time/space complexity).</li>

            </ul>

            <p className='text-xl lg:text-2xl mt-5 mb-2 font-semibold'>Rules:</p>
            <ul style={{listStyleType : "disc"}} className='lg:text-xl' >
                <li>Each problem has a specific score based on its difficulty.</li>
                <li>Partial marks can be awarded for passing some test cases.</li>
                <li>No plagiarism. If two or more codes are suspiciously similar, they will be disqualified.</li>
            </ul>
        </div>
    </div>
  )
}

export default Coding
