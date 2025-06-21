


import React, { useState, useEffect } from 'react';
import './Herosection.css';
import getStoredData from '../json/fetchData'; // Call it correctly
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {
  const storedData = getStoredData();
  const heroSlides = storedData?.["1"]?.slides || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroSlides.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  if (heroSlides.length === 0) {
    return <p>Loading slides...</p>;
  }

  return (
    <div className="hero-container">
      <button onClick={handlePreviousClick} className="hero-button prev">
        <FaChevronLeft />
      </button>

      <img
        src={heroSlides[currentIndex].image}
        alt="Project preview"
        className="hero-image"
      />

      <div className="hero-text-overlay">
        <p className='hero-text-1st'>{heroSlides[currentIndex].texts[0]}</p>
        <p className='hero-text-2nd'>{heroSlides[currentIndex].texts[1]}</p>
        <p className='hero-text-3rd'>{heroSlides[currentIndex].texts[2]}</p>
      </div>

      <button onClick={handleNextClick} className="hero-button next">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default HeroSection;


