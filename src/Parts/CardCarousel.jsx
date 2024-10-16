// src/CardCarousel.js
import React from 'react';
import Slider from 'react-slick';
import Cards from './Cards';


const CardCarousel = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Show one slide on small devices
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  centerMode: true, // Enable center mode
  centerPadding: '0px', // Adjust the padding as needed
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1, // Ensure only one card shows on small screens
        slidesToScroll: 1, // Scroll one card at a time
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3, // Show three cards on medium screens
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <div className="carousel-container w-full ">
      <Slider {...settings}>
        <div>
          <Cards />
        </div>
        <div>
           <Cards />
        </div>
        <div>
           <Cards />
        </div>
      </Slider>
    </div>
  );
};

export default CardCarousel;
