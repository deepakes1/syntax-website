import './App.css'
import Navbar from './Parts/Navbar'
import Timer from './Parts/Timer'
import zinnia from './assets/zinnia.png'


import CardCarousel from './Parts/CardCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
      
  return (
    <>
      <div className="h-[10vh] bg-[#40377D] flex justify-center items-center">
        <Navbar />
      </div>
      


      <div className="p-5 h-[80vh] md:h-[70vh] ">
         <div className="">
          <div className="second-color  text-center md:flex flex-col items-center justify-center">
          <h1 className='text-2xl font-extrabold lg:text-3xl'>GOVERNMENT COLLEGE OF ENGINEERING ERODE</h1>
          <h1 className='text-xl font-bold lg:text-xl mt-1'>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h1>
          <h1 className='text-lg mt-1'>PROUDLY PRESENTS </h1>
          
          <div className="mt-10 flex flex-col items-center justify-center">
            <img src={zinnia} className='h-full w-[80vw]  md:w-[50vw] scale-125 md:scale-100  object-cover' alt="" />
          </div>
        </div> 
        
        <div className="mt-16">
          <Timer/>
        </div>
         </div>

        
      </div>

      <div className='flex flex-col items-center justify-center mt-32 h-[40vh]'>
          <CardCarousel/>
        </div>

      <div className="p-5 mt-16">
        <h1 className='text-3xl font-bold'>About Symposium</h1>
        <p className='text-lg mt-2'>Join us for Zinnia, an exciting symposium designed to inspire innovation, collaboration, and growth in computer science and engineering. This unique event unites students, faculty, and industry professionals, offering a platform for aspiring engineers to present their ideas and engage in knowledge-sharing. Zinnia aims to promotes a collaborative environment where participants from various academic levels can explore emerging technologies and discover new possibilities</p>
      </div>

    </>
  )
}

export default App
