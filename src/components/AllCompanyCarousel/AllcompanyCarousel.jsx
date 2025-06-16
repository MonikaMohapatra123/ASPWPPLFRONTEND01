


import React, { useEffect, useState } from "react";
import "./AllCompanyCarousel.css";

const AllcompanyCarousel = ({ carouselData }) => {
  const slides = carouselData.slides;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="carousel-container">
      <div className="slide">
        <img src={slides[currentIndex].image} alt="Slide" />
        <p>{slides[currentIndex].paragraph}</p>
        <h2>{slides[currentIndex].heading}</h2>
      </div>
      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AllcompanyCarousel;
