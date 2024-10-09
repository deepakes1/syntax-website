import './App.css'
import Navbar from './Parts/Navbar'
import Timer from './Parts/Timer'
import syntax from './assets/syntax.png'


function App() {
  
  return (
    <>

      <Navbar />


      <div className="p-5">
        
         <div className="second-color  text-center md:flex flex-col items-center justify-center">
          <h1 className='text-xl font-extrabold lg:text-3xl'>GOVERNMENT COLLEGE OF ENGINEERING ERODE</h1>
          <h1 className='text-lg font-bold lg:text-xl mt-1'>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h1>
          <h1 className='text-lg mt-1'>PROUDLY PRESENTS </h1>
          
          <div className="mt-3 flex flex-col items-center justify-center">
            <img src={syntax} className='h-full w-[70vw] md:w-[50vw]  object-cover' alt="" />
          </div>
        </div> 
        
        <div className="">
          <Timer/>
        </div>


      </div>
      

      

    </>
  )
}

export default App
