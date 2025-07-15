import React, { useEffect } from 'react';
import './AllAboutUs.css';
import { motion, useAnimate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AllAboutUs = ({ subtitle, title, description, image }) => {
  const [scope, animate] = useAnimate();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      animate(scope.current, { opacity: 1, x: 0 }, { duration: 1 });
    }
  }, [inView, animate, scope]);

  console.log("AllAboutUs Loaded:", title);

  return (
    <div className="about-section">
      <div className="about-text">
        <h4 className="about-subtitle">{subtitle}</h4>
        <h2 className="about-title">{title}</h2>
        <div className="underline"></div>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>

      <motion.div
        ref={(node) => {
          scope.current = node;
          ref(node);
        }}
        className="about-image"
        initial={{ opacity: 0, x: 100 }} // Slide in from right
      >
        <img src={image} alt="About Us" />
      </motion.div>
    </div>
  );
};

export default AllAboutUs;
