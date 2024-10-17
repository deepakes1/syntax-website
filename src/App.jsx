import './App.css'
import Navbar from './Parts/Navbar'
import Timer from './Parts/Timer'
import zinnia from './assets/zinnia.png'
import Buttons from './components/Buttons'

import CardCarousel from './Parts/CardCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import AboutSymposium from './Parts/AboutSymposium'
function App() {
      
  return (
    <>
      <div className="h-[10vh] bg-[#40377D] flex justify-center items-center">
        <Navbar />
      </div>
      


      <div className="p-5 h-[80vh] md:h-[70vh] ">
         <div className="heading">
          <div className="second-color  text-center md:flex flex-col items-center justify-center">
          <h1 className='text-3xl font-extrabold lg:text-3xl'>GOVERNMENT COLLEGE OF ENGINEERING ERODE</h1>
          <h1 className='text-2xl font-bold lg:text-xl mt-2'>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h1>
          <h1 className='text-xl  mt-2'>Rolls Out the Red Carpet for </h1>
          
          <div className="mt-10 flex flex-col items-center justify-center">
            <img src={zinnia} className='h-full w-[80vw]  md:w-[50vw] scale-125 md:scale-100  object-cover' alt="" />
          </div>
        </div> 
        
        <div className="mt-16">
          <Timer/>
        </div>
         </div>

        
      </div>

      {/* <div className="h-[30vh]  flex items-center justify-center">
            <AboutSymposium />
        </div> */}
      
      <div className="p-5">
        <div className="p-6 mt-16 lg:mt-32 rounded-bl-[5rem] rounded-tr-[5rem] bg-[#40377D] lg:w-[85vw] mx-auto lg:p-10 text-[#E6E6FA]">
        <h1 className='text-3xl font-bold text-center'>About Symposium</h1>
        <p className='text-lg mt-5 '>Join us for <b>Zinnia</b>, an exciting symposium designed to inspire innovation, collaboration, and growth in computer science and engineering. This unique event unites students, faculty, and industry professionals, offering a platform for aspiring engineers to present their ideas and engage in knowledge-sharing. Zinnia aims to promotes a collaborative environment where participants from various academic levels can explore emerging technologies and discover new possibilities</p>
      </div> 
      </div>
       

      <div className='flex flex-col items-center justify-center mt-32 h-[40vh]'>
          <CardCarousel/>
        </div>

      {/* event Details */}
      <div className="mt-32 lg:mt-28 ">
      <Buttons/>
    </div>


      {/* about clg */}
      <div className="p-5">
        <div className="p-5 mt-24 bg-[#40377D] rounded-tl-[5rem] rounded-br-[5rem] text-[#E6E6FA]">
        <h1 className='text-3xl font-bold text-center  '>About Our College</h1>
        <p className='text-lg mt-5 '>Government College of Engineering, Erode (GCE Erode), established in 1984, is a leading engineering institution in Tamil Nadu, India. <b>Affiliated with Anna University</b> , it offers a conducive learning environment on a <b>200-acre campus</b>. Known for its excellent infrastructure and qualified faculty, GCE Erode emphasizes research and boasts a strong record of student placements. It also serves as the <b>Zonal Headquarters</b> for <b>Zone-XI of Anna University</b>, overseeing engineering colleges in the region.</p>
      </div>
      </div>


      {/* general instruction */}
    


    </>
  )
}

export default App
