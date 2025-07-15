import React, { useState, useEffect } from "react";
import "./Herosection.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

const HeroSection = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch slides from your backend API
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await axios.get("https://aspwppl-backend.vercel.app/activities");
        const activities = Array.isArray(res.data) ? res.data : [res.data];

        const formattedSlides = activities.map((activity) => ({
          image: activity.ContentPhoto || (activity.photo?.[0]?.url ?? ""),
          texts: [
            activity.Header,
            activity.Sentence,
            activity.Sentence2,
            ...(activity.Points?.map((p) => p.Point) || []),
          ].filter(Boolean),
        }));

        setSlides(formattedSlides);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch slides", error);
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  // ✅ Auto slider interval
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        slides.length ? (prevIndex + 1) % slides.length : 0
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, slides]);

  // ✅ Manual controls
  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) return <p>Loading slides...</p>;
  if (!slides.length) return <p>No slides available.</p>;

  return (
    <div className="hero-container">
      <div className="hero-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <img src={slide.image} alt={`Slide ${index}`} className="hero-image" />
            <div className="hero-text-overlay">
              {slide.texts.map((text, i) => (
                <p key={i} className={`hero-text-line hero-text-${i + 1}`}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="hero-nav prev" onClick={handlePreviousClick}>
        <FaChevronLeft />
      </button>
      <button className="hero-nav next" onClick={handleNextClick}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default HeroSection;







































