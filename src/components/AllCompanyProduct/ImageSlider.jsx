import React, { useState } from "react";

const ImageSlider = ({images}) => {
  const [index, setIndex] = useState(0);

  const imagesPerView = 2;
  const slideGap = 1;
  const slideWidth = 180; // smaller width
  const containerWidth = (slideWidth + slideGap) * imagesPerView - slideGap;

  const maxIndex = images.length - imagesPerView;

  const nextSlide = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div style={{ ...styles.sliderContainer, width: containerWidth }}>
      <button onClick={prevSlide} style={{ ...styles.sideButton, left: 0 }}>
        &lt;
      </button>

      <div style={styles.sliderWrapper}>
        <div
          style={{
            ...styles.slider,
            transform: `translateX(-${index * (slideWidth + slideGap)}px)`,
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              style={{
                ...styles.slide,
                width: slideWidth,
                marginRight: slideGap,
              }}
            >
              <a href={src} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={`Slide ${i + 1}`} style={styles.image} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <button onClick={nextSlide} style={{ ...styles.sideButton, right: 0 }}>
        &gt;
      </button>
    </div>
  );
};

const styles = {
  sliderContainer: {
    position: "relative", // needed for absolute buttons inside
    marginLeft: "-5px",
  },
  sliderWrapper: {
    overflow: "hidden",
  },
  slider: {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
  },
  slide: {
    flexShrink: 0,
  },
  image: {
    width: "80%",
    height: "150px",
    objectFit: "cover",

    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },
  sideButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "5px 12px",
    fontSize: "24px",
    backgroundColor: "rgba(0,0,0,0.5)", // semi-transparent black
    color: "white",
    border: "none",
    borderRadius: "30%",
    cursor: "pointer",
    userSelect: "none",
    zIndex: 10,
  },
};

export default ImageSlider;
