import React, { useState, useEffect, useRef } from 'react';
import './AllHighlights.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AllHighlights = () => {
  const sampleData = [
    { name: 'Projects Completed', count: 120 },
    { name: 'Happy Clients', count: 85 },
    { name: 'Ongoing Projects', count: 10 },
    
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [currentCounts, setCurrentCounts] = useState(
    Array(sampleData.length).fill(0)
  );
  const highlightsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (highlightsRef.current) {
        const top = highlightsRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentCounts(prevCounts =>
          prevCounts.map((count, index) =>
            count < sampleData[index].count ? count + 1 : count
          )
        );
      }, 10); // adjust for smoothness
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const animationControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animationControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [animationControls, inView]);

  return (
    <div className="mainHigh-container">
      <motion.div
        className="animated-section"
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={animationControls}
      >
        <div className="high-container" ref={highlightsRef}>
          {sampleData.map(({ name }, index) => (
            <div key={index} className="highlight-item">
              <p className="high-count">{currentCounts[index]} +</p>
              <h2 className="high-highlights">{name}</h2>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AllHighlights;

