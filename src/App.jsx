
import './App.css'

import Navbar from './Parts/Navbar'
function App() {
  
  return (
    <>

      <Navbar />

      
      <div className="p-5">
        {/* clg name */}
        <div className="flex gap-3 mt-5  md:mt-10 items-center">
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
