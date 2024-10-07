
import './App.css'
import collegelogo from "../src/assets/collegelogo.jpg"

import Navbar from './Parts/Navbar'
function App() {
  
  return (
    <>
      <div className="p-5">
        <Navbar/>

        {/* clg name */}
        <div className="flex gap-3  md:mt-16 items-center">
          {/* <img src={collegelogo} className='h-16 w-16 object-cover rounded-full' alt="image" /> */}
          <div className="second-color font-semibold text-xl">
            <h1>Government College Of Engineering Erode</h1>
            <p>Department of CSE</p>
          </div>
        </div>


      </div>
      

      

    </>
  )
}

export default App
