import React, { Component } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../src/assets/img1.jpg";
import img2 from "../assets/img2.jpg";  
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const Carousel = () => {
  return (
    <ErrorBoundary>
      <ResponsiveCarousel 
        autoPlay 
        interval={2000} 
        showThumbs={false} 
        infiniteLoop 
        showArrows={true}
        stopOnHover={true}
      >
        <div>
          <img src={img1} alt="Furniture" className='h-[30vh] md:h-[50vh] rounded-3xl w-full object-cover' />
          
        </div>
        <div>
          <img src={img2} alt="Layout" className='h-[30vh]  md:h-[50vh] rounded-3xl w-full object-cover' />
          
        </div>
        <div>
          <img src={img3} alt="Globe" className='h-[30vh]  md:h-[50vh] rounded-3xl w-full object-cover' />
        </div>

        <div>
          <img src={img4} alt="Globe" className='h-[30vh]  md:h-[50vh] rounded-3xl w-full object-cover' />
        </div>
      </ResponsiveCarousel>
    </ErrorBoundary>
  );
};

export default Carousel;
