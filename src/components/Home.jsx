// import React from 'react'
// import Timer from '../Parts/Timer'
// import zinnia from '../assets/zinnia.png'
// import Buttons from '../components/Buttons'

// import CardCarousel from '../Parts/CardCarousel';
// import whatsapp from '../assets/whatsapp.png'
// import instalogo from '../assets/instalogo.png'
// import maillogo from '../assets/maillogo.png'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import poster from "../assets/MAIN POSTER.png"

// function Home() {
//   return (
//      <div>
//       <div className="p-5 h-[80vh] md:h-[70vh] ">
//          <div className="heading mt-16">
//           <div className="second-color  text-center md:flex flex-col items-center justify-center">
//           <h1 className='text-3xl font-extrabold lg:text-3xl'>GOVERNMENT COLLEGE OF ENGINEERING ERODE</h1>
//           <h1 className='text-2xl font-bold lg:text-xl mt-2'>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h1>
//           <h1 className='text-xl text-red-600 mt-2'>Rolls Out the Red Carpet for </h1>
          
//           <div className="mt-10 flex flex-col items-center justify-center">
//             <img src={zinnia} className='h-full w-[80vw]  md:w-[50vw] scale-125 md:scale-100  object-cover' alt="" />
//           </div>
//         </div> 
        
//         <div className="mt-16 mb-10">
//           <Timer/>
//         </div>
//          </div>

        
//       </div>

//       {/* poster */}
//       <div className="mt-10 lg:mt-48 p-5">
//           <img src={poster}className='h-full lg:h-[80vh]   w-full object-contain' alt="" />
//       </div>

     
      
//       <div className="p-5">
//         <div className="p-6 mt-16 lg:mt-32   lg:w-[85vw] mx-auto lg:p-1 ">
//         <h1 className='text-3xl lg:text-5xl  font-extrabold text-center'>About Symposium</h1>
//         <p className='text-lg lg:text-2xl mt-5 text-center font-extrabold'>Join us for <b>Zinnia</b>, an exciting symposium designed to inspire innovation, collaboration, and growth in computer science and engineering. This unique event unites students, faculty, and industry professionals, offering a platform for aspiring engineers to present their ideas and engage in knowledge-sharing. Zinnia aims to promotes a collaborative environment where participants from various academic levels can explore emerging technologies and discover new possibilities</p>
//       </div> 
//       </div>
       

//        <div className='flex flex-col items-center justify-center mt-32 h-[40vh]'>
//           <CardCarousel/>
//         </div> 

//       {/* event Details */}
//       <div className="mt-32 lg:mt-28 ">
//       <Buttons/>
//     </div> 


//       {/* about clg */}
//        <div className="p-5">
//         <div className="p-5 mt-24  lg:w-[85vw] mx-auto lg:p-10 ">
//         <h1 className='text-3xl lg:text-5xl  font-bold text-center  '>About Our College</h1>
//         <p className='text-lg lg:text-2xl mt-5 font-extrabold'>Government College of Engineering, Erode (GCE Erode), established in 1984, is a leading engineering institution in Tamil Nadu, India. <b>Affiliated with Anna University</b> , it offers a conducive learning environment on a <b>200-acre campus</b>. Known for its excellent infrastructure and qualified faculty, GCE Erode emphasizes research and boasts a strong record of student placements. It also serves as the <b>Zonal Headquarters</b> for <b>Zone-XI of Anna University</b>, overseeing engineering colleges in the region.</p>
//       </div>
//       </div> 


//       {/* Contact Section */}
//        <div className="bg-black p-5 flex flex-col items-center justify-center">
//         <h1 className='text-3xl text-white text-center font-black'>Contact Us</h1>

//         <div className="flex gap-3 mt-7 items-center">
//           <div className="">
//             <a href="https://wa.me/9944505576">
//               <img src={whatsapp} className='h-14 w-14 object-cover' alt="" />

//             </a>
//         </div>
//         <div className="">
//         <a href="https://www.instagram.com/gce._.zinnia?igsh=MTVidmhrN2xzOHoweA==">
//           <img src={instalogo} className='h-14 w-14 object-cover' alt="" />
//         </a>
//         </div>

//         <div className="">
//           <a href="mail">
//             <img src={maillogo} className='h-14 w-14 object-cover' alt="" />
//           </a>
          
//         </div>
//         </div>

//       </div> 
//     </div>
//   )
// }

// export default Home



import React, { useEffect, useRef, useState } from 'react';
import Timer from '../Parts/Timer';
import zinnia from '../assets/zinnia.png';
import Buttons from '../components/Buttons';
import CardCarousel from '../Parts/CardCarousel';
import whatsapp from '../assets/whatsapp.png';
import instalogo from '../assets/instalogo.png';
import maillogo from '../assets/maillogo.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import poster from "../assets/MAIN POSTER.png";

const Home = () => {
  const [visibleSections, setVisibleSections] = useState({
    heading: false,
    poster: false,
    about: false,
    carousel: false,
    contact: false,
  });

  const sectionsRef = useRef([]);

  const handleScroll = (entries) => {
    entries.forEach(entry => {
      setVisibleSections(prev => ({
        ...prev,
        [entry.target.id]: entry.isIntersecting,
      }));
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
    
      {/* Heading Section */}
      <div id="heading" ref={el => sectionsRef.current[0] = el} className={`p-5 h-[80vh] md:h-[70vh] transition-opacity duration-1000 ${visibleSections.heading ? 'opacity-100' : 'opacity-0'}`}>
        <div className="heading mt-32">

          <div className="second-color text-center md:flex flex-col items-center justify-center">
            <h1 className='text-3xl font-extrabold lg:text-3xl'>GOVERNMENT COLLEGE OF ENGINEERING ERODE</h1>
            <h1 className='text-2xl font-bold lg:text-xl mt-2'>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h1>
            <h1 className='text-xl text-red-600 mt-2'>Rolls Out the Red Carpet for </h1>
            <div className="mt-10 flex flex-col items-center justify-center">
              <img src={zinnia} className='h-full w-[80vw] md:w-[50vw] scale-125 md:scale-100 object-cover' alt="" />
            </div>
          </div>
          <div className="mt-16 mb-52">
            <Timer />
          </div>
        </div>
      </div>

      {/* Poster Section */}
     <div id="poster" ref={el => sectionsRef.current[1] = el}  className={`mt-32 lg:mt-56  p-5 transition-opacity duration-1000 ${visibleSections.poster ? 'opacity-100' : 'opacity-0'} overflow-hidden`}>
      <img src={poster} className='h-full lg:h-[80vh] w-full object-contain rounded-3xl ' alt="" />
    </div>


      {/* About Symposium Section */}
      <div id="about" ref={el => sectionsRef.current[2] = el} className={`p-5 transition-opacity duration-1000 ${visibleSections.about ? 'opacity-100' : 'opacity-0'}`}>
        <div className="p-6 mt-16 lg:mt-24 lg:w-[85vw] mx-auto lg:p-1">
          <h1 className='text-3xl lg:text-5xl font-extrabold text-center'>About Symposium</h1>
           <p className='text-lg lg:text-2xl mt-5 text-center font-extrabold'>Join us for <b>Zinnia</b>, an exciting symposium designed to inspire innovation, collaboration, and growth in computer science and engineering. This unique event unites students, faculty, and industry professionals, offering a platform for aspiring engineers to present their ideas and engage in knowledge-sharing. Zinnia aims to promotes a collaborative environment where participants from various academic levels can explore emerging technologies and discover new possibilities</p>
        </div>
      </div>

      {/* Carousel Section */}
      <div id="carousel" ref={el => sectionsRef.current[3] = el} className={`flex flex-col items-center justify-center mt-11  lg:mt-32 h-[40vh] transition-opacity duration-1000 ${visibleSections.carousel ? 'opacity-100' : 'opacity-0'}`}>
        <CardCarousel />
      </div>

       <div className="mt-28 lg:mt-28 ">
        <Buttons/>
      </div> 

      {/* about clg */}
       <div id="aboutCollege" ref={el => sectionsRef.current[4] = el} className={`p-5 transition-opacity duration-1000 ${visibleSections.aboutCollege ? 'opacity-100' : 'opacity-0'}`}>
        <div className="p-5 mt-24 lg:w-[85vw] mx-auto lg:p-10">
          <h1 className='text-3xl lg:text-5xl font-bold text-center'>About Our College</h1>
          <p className='text-lg lg:text-2xl mt-5 font-extrabold'>
            Government College of Engineering, Erode (GCE Erode), established in 1984, is a leading engineering institution in Tamil Nadu, India. 
            <b> Affiliated with Anna University</b>, it offers a conducive learning environment on a <b>200-acre campus</b>. Known for its excellent infrastructure and qualified faculty, 
            GCE Erode emphasizes research and boasts a strong record of student placements. It also serves as the <b>Zonal Headquarters</b> for 
            <b> Zone-XI of Anna University</b>, overseeing engineering colleges in the region.
          </p>
        </div>
      </div>

            {/* Contact Section */}
      <div id="contact" ref={el => sectionsRef.current[5] = el} className={`bg-black p-5 flex flex-col items-center justify-center transition-opacity duration-1000 ${visibleSections.contact ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className='text-3xl text-white text-center font-black'>Contact Us</h1>

        <div className="flex flex-col md:flex-row gap-5 mt-7 items-center">
          <div className="flex gap-4 items-center">
            <a href="https://wa.me/9360085024">
              <img src={whatsapp} className='h-8 w-8 object-cover' alt="WhatsApp" />
            </a>

           <a href="https://wa.me/9360085024" className='text-white text-lg'>9360085024</a>
            
          </div>

          <div className="flex gap-4 items-center">
            <a href="https://www.instagram.com/gce._.zinnia?igsh=MTVidmhrN2xzOHoweA==">
              <img src={instalogo} className='h-8 w-8 object-cover' alt="Instagram" />
            </a>
            <a href="https://www.instagram.com/gce._.zinnia?igsh=MTVidmhrN2xzOHoweA==" className='text-white text-lg'>gce._.zinnia</a>
          </div>
         <div>

         <div className="flex gap-4 items-center">
            <a href="mailto:gcezinnia@gmail.com">
              <img src={maillogo} className='h-8 w-8 object-cover' alt="Instagram" />
            </a>
            <a href="mailto:gcezinnia@gmail.com" className='text-white text-lg'>gcezinnia@gmail.com</a>
          </div>
         <div></div>

        </div>



        </div>
      </div>
    </div>
  );
};

export default Home;