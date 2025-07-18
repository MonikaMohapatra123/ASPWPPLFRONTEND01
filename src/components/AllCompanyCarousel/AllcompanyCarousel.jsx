import React, { useEffect, useState } from "react";
import "./AllCompanyCarousel.css";

const AllcompanyCarousel = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % slides.length

      );
    }, 3000);

    return () => clearInterval(timer);
  }, [slides]);

  if (!slides || slides.length === 0) return null;

  // const { image, heading, paragraph } = slides[currentIndex];

  return (
<div className="carousel-container">
  <div
    className="slides-wrapper"
    style={{
      transform: `translateX(-${currentIndex * 100}%)`,
    }}
  >
    {slides.map((slide, index) => (
      <div className="slide" key={index}>
        <img src={slide.image} alt={slide.heading || "Slide Image"}  />
        <div className="slide-content">
          <h2>{slide.heading}</h2>
          <p>{slide.paragraph}</p>
        </div>
      </div>
    ))}
  </div>

  <div className="indicators">
    {slides.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === currentIndex ? "active" : ""}`}
        onClick={() => setCurrentIndex(index)}
      />
    ))}
  </div>
</div>

  );
};

export default AllcompanyCarousel;
