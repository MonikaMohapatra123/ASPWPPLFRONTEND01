
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Details.css';

const AllServiceDetails = ({ cards }) => {
  const [index, setIndex] = useState(1); // Must be outside condition
  const sliderRef = useRef(null);       // Must be outside condition

  // Fallback to empty object to avoid crash
  const cardArray = Object.values(cards || {});


  
  // Prepare slides only if cards are available
  const slides =
    cardArray.length > 0
      ? [cardArray[cardArray.length - 1], ...cardArray, cardArray[0]]
      : [];

  const moveToIndex = (i) => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transition = 'transform 0.8s ease-in-out';
    }
    setIndex(i);
  };

  const handleRightClick = () => moveToIndex(index + 1);
  const handleLeftClick = () => moveToIndex(index - 1);

  useEffect(() => {
    if (!sliderRef.current || slides.length === 0) return;

    const slider = sliderRef.current;

    const handleTransitionEnd = () => {
      slider.style.transition = 'none';
      if (index === slides.length - 1) {
        setIndex(1);
        slider.style.transform = `translateX(-100%)`;
      } else if (index === 0) {
        setIndex(slides.length - 2);
        slider.style.transform = `translateX(-${(slides.length - 2) * 100}%)`;
      }
    };

    slider.addEventListener('transitionend', handleTransitionEnd);
    slider.style.transform = `translateX(-${index * 100}%)`;

    return () => slider.removeEventListener('transitionend', handleTransitionEnd);
  }, [index, slides.length]);


  if (!cards || cardArray.length === 0) {
    return <div className="no-cards">No cards to display</div>;
  }

  return (
    <div className="main">
      <div className="carousel-container-service">
        <div className="slider" ref={sliderRef}>
          {slides.map((card, i) => (
            <div className="card" key={i}>
              <div className="card-content">
                <div className="card-heading">
                  <div>—Our Services</div>
                  <div className="card-description">{card.description}</div>
                  <div className="card-title">{card.title}</div>
                </div>
                <div>
                  <img src={card.img} alt={card.description}  loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FontAwesomeIcon
        icon={faArrowLeft}
        className="left-arrow"
        onClick={handleLeftClick}
      />
      <FontAwesomeIcon
        icon={faArrowRight}
        className="right-arrow"
        onClick={handleRightClick}
      />
    </div>
  );
};

export default  AllServiceDetails;
