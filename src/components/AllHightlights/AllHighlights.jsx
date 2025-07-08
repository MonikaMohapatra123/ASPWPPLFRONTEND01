import React, { useState, useEffect, useRef } from 'react';
import './AllHighlights.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AllHighlights = ({ sampleData }) => {
  const [currentCounts, setCurrentCounts] = useState(
    sampleData.map(() => 0)
  );

  const animationControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const animationFrameRef = useRef();

  // Count up logic with requestAnimationFrame for smoother visuals
  useEffect(() => {
    if (inView) {
      const start = performance.now();

      const step = () => {
        setCurrentCounts(prevCounts =>
          prevCounts.map((count, index) => {
            const target = sampleData[index].count;
            const increment = Math.ceil(target / 100); // Faster finish for large numbers
            return count < target ? Math.min(count + increment, target) : count;
          })
        );

        const allReached = currentCounts.every((count, index) => count >= sampleData[index].count);
        if (!allReached) {
          animationFrameRef.current = requestAnimationFrame(step);
        }
      };

      animationFrameRef.current = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrameRef.current);
    }
  }, [inView, sampleData]);

  // Trigger entrance animation
  useEffect(() => {
    if (inView) {
      animationControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
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
        <div className="high-container">
          {sampleData.map(({ name }, index) => (
            <div key={index} className="highlight-item">
              <p className="high-count">{currentCounts[index]}+</p>
              <h2 className="high-highlights">{name}</h2>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AllHighlights;
