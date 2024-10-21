// src/CardCarousel.js
import React from 'react';
import Slider from 'react-slick';
import Cards from './Cards';

import hackathon from "../assets/hackathon.png"
const CardCarousel = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Show one slide on small devices
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true, 
  centerPadding: '0px', 
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1, 
        slidesToScroll: 1, 
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3, 
        slidesToScroll: 1,
      },
    },
  ],
};
const images = [
    hackathon,
    hackathon,
    hackathon,
  ];
  const texts = [
    'This is the 1content on the back!',
    'This is the 2content on the back!',
    'This is the 3content on the back!',
  ];


  return (
    <div className="carousel-container w-full ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Cards image={image} text={texts[index]} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
