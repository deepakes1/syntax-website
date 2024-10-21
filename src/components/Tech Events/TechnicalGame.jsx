import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
function TechnicalGame() {
  return (
    <div>
      <div className="m-5 lg:w-[80vw] lg:mx-auto font-semibold">
        <div className='p-5' >
            <h2 className="text-center text-black text-3xl lg:text-4xl  font-bold">Code Quest</h2>

            <p className='text-2xl lg:text-3xl mt-5 underline mb-2 font-bold'>Event Structure</p>

            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>5 Rounds :</span> Each round should have increasing difficulty, and a clue will be given after successful completion of each round.</li>
                <li><span className='font-extrabold'>Elimination Rule : </span> If a participant fails to complete a round, they are eliminated.</li>
                <li><span className='font-extrabold'>Final Answer : </span> Each participant will be allotted a certain time (usually 10-15 minutes) for presenting the paper, followed by a Q&A session (5-10 minutes).</li>
                <li><span className='font-extrabold'>Presentation Format : </span> After the 5th round, participants use the accumulated clues to guess the final answer.</li>
            </ul>

             <p className='text-2xl lg:text-3xl mt-5 mb-2 underline font-bold'>Suggested Rounds and Challenges :</p>

             <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Round 1: Basic Coding Challenge</p>
             <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Task</p>
             
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Give participants simple coding problems based on basic concepts like loops, conditionals, or arrays. For example, write a function to check if a number is prime or reverse a string.</span></li>
                <li><span className='font-extrabold'>Use coding platforms like HackerRank, LeetCode, or Codeforces for automatic evaluation.</span></li>
                <li><span className='font-extrabold'>Submission Deadline:  </span> Submit both your paper and slides by the specified deadline to avoid disqualification.</li>
                <li><span className='font-extrabold'>On the Day of Presentation :  </span> Arrive early to test the equipment and ensure everything works. Stick to the time limit. Speak clearly and confidently, making sure to engage with the audience.</li>
                <li><span className='font-extrabold'>Q & A Etiquette :   </span> Be prepared to answer questions about your paper.</li>
                <li><span className='font-extrabold'>Judging Criteria : </span><br />1. Originality and relevance of the research  <br /> 2. Clarity and structure of the paper <br />3. o	Presentation skills (clarity, engagement, time management) <br /> 4. Handling of Q&A session.</li>
            </ul>

            <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Clue:</p>
             
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>After completing this round, reveal a simple clue related to the final answer.</span></li>
                <li><span className='font-extrabold'>Use coding platforms like HackerRank, LeetCode, or Codeforces for automatic evaluation.</span></li>
                <li><span className='font-extrabold'>Example Clue:  </span> "This person played a key role in the development of computational theory."</li>
                <li><span className='font-extrabold'>Hint for Implementation : </span> Choose a coding task that most participants can solve, ensuring enough people make it to the next round.</li>
            </ul>

            <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Round 2: Data Structures Challenge</p>
             <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Task</p>
             
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Present a problem involving data structures like stacks, queues, or linked lists.</span></li>
                <li><span className='font-extrabold'>Use coding platforms like HackerRank, LeetCode, or Codeforces for automatic evaluation.</span></li>
                <li><span className='font-extrabold'>Example Problem : </span> Implement a queue using two stacks or solve a problem requiring efficient use of hash maps.</li>
            </ul>
            <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Clue:</p>
             
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Give a clue tied to famous algorithms or data structures.</span></li>
                <li><span className='font-extrabold'>Example Clue :  </span> "He created a fundamental model for computers, which can simulate any algorithmic process."</li>
                <li><span className='font-extrabold'>Hint for Implementation : </span>Focus on medium difficulty data structure problems to start filtering out participants while keeping it manageable.</li>
            </ul>

            <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Round 3: Algorithms Challenge</p>
             <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Task</p>
             
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>This round involves classic algorithms such as searching (binary search) or sorting (quick sort, merge sort).</span></li>
                <li><span className='font-extrabold'>Example Problem : </span> Implement the quicksort algorithm or solve a problem using dynamic programming (e.g., the longest increasing subsequence).</li>
            </ul>
            <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Clue:</p>
             
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Provide a historical or algorithmic clue that leads toward the final answer.</span></li>
                <li><span className='font-extrabold'>Example Clue :  </span> "This person contributed to the development of the Enigma machine during World War II."</li>
                <li><span className='font-extrabold'>Hint for Implementation : </span>Use time constraints and complex algorithm problems to make this round more challenging.</li>
            </ul>


            <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Round 4: Debugging Challenge</p>
             <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Task</p>
             
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Present participants with buggy code and ask them to identify and fix errors. Bugs could involve logical errors, infinite loops, or inefficient algorithms.</span></li>
                <li><span className='font-extrabold'>Example Problem : </span> Provide an implementation of binary search with subtle off-by-one errors and ask participants to fix it.</li>
            </ul>
            <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Clue:</p>
             
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Give a more specific clue to narrow down the final answer.</span></li>
                <li><span className='font-extrabold'>Example Clue :  </span>"His last name starts with a T, and he is often considered the father of modern computer science."</li>
                <li><span className='font-extrabold'>Hint for Implementation : </span>This round should be a mixture of problem-solving and attention to detail, rewarding those who can debug effectively.</li>
            </ul>


            <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Round 5: Logic Puzzle or Advanced Algorithm</p>
             <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Task</p>
             
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>A challenging puzzle that requires problem-solving skills and an understanding of algorithms. You could also opt for an advanced algorithmic challenge, such as solving a NP-hard problem.</span></li>
                <li><span className='font-extrabold'>Example Problem : </span> Solve a logic puzzle where participants need to decipher a hidden message using clues from the previous rounds.</li>
            </ul>
            <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Clue:</p>
             
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>The final clue should point directly to the answer.</span></li>
                <li><span className='font-extrabold'>Example Clue :  </span>"He developed the Turing Test, a measure of a machine's ability to exhibit intelligent behavior indistinguishable from a human."</li>
            </ul>

            <p className='text-xl lg:text-2xl mt-5 underline mb-2 font-bold'>Clue Setup and Reveal Mechanism:</p>
             <h1 className='text-xl font-semibold'>We could reveal clues to participants through a screen or give them written clues on paper as they advance.</h1>
                <h1 className='text-xl font-bold'>Example Final Answer: Alan Turing</h1>
            <ul style={{listStyleType : "disc"}} className='text-xl' >
                <li><span className='font-extrabold'>Round 1 Clue : </span> "He was instrumental in developing the theoretical foundations of computation."</li>
                <li><span className='font-extrabold'>Round 2 Clue :  </span>"His work laid the groundwork for artificial intelligence."</li>
                <li><span className='font-extrabold'>Round 3 Clue :  </span>"He played a key role in breaking a military code during a major conflict."</li>
                <li><span className='font-extrabold'>Round 4 Clue :  </span>"He is the namesake of a test for determining machine intelligence."</li>
                <li><span className='font-extrabold'>Round 5 Clue :  </span>"He is widely regarded as the father of computer science, and his last name starts with 'T'."</li>
            
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
