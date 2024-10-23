// src/CardCarousel.js
import React from 'react';
import Slider from 'react-slick';
import Cards from './Cards';

import img1 from "../../src/assets/Codingfinal.png";
import img2 from "../assets/Hackathonfinal.png";  
import img3 from "../assets/Mysterysqlfinal.png";
import img4 from "../assets/paperpresentationfinal.png";
import img5 from "../assets/Technicalquizfinal.png";
import img6 from "../assets/Techxcelerate.png";

const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
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
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
  ];

  const texts = [
    'This is the 1content on the back!',
    'This is the 2content on the back!',
    'This is the 3content on the back!',
    'This is the 4content on the back!',
    'This is the 5content on the back!',
    'This is the 6content on the back!',
  ];

  // Using the same images for the text section
  const textImages = images; 
  return (
    <div className="carousel-container w-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Cards image={image} text={texts[index]} textImage={textImages[index]} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;