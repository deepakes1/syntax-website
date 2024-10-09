import './App.css'
import Navbar from './Parts/Navbar'
import Timer from './Parts/Timer'


function App() {
  
  return (
    <>

      <Navbar />


      <div className="p-5">
        
         <div className="second-color font-extrabold text-center md:flex flex-col items-center justify-center">
          <h1 className='text-xl lg:text-3xl'>GOVERNMENT COLLEGE OF ENGINEERING ERODE</h1>
          <h1 className='text-lg lg:text-xl mt-1'>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h1>
          <h1 className='text-lg font-extrabold mt-1'>PROUDLY PRESENTS </h1>
          {/* <h1 className='text-5xl font-bold mt-5 font-serif'>SYNTAX</h1> */}
        </div> 
        
        <div className="mt-60">
          <Timer/>
        </div>


      </div>
      

      

    </>
  )
}

export default App
