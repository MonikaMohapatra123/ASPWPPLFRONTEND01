



// import React from 'react';
// import './AllAboutUs.css';

// const AllAboutUs = ({ subtitle, title, description, image }) => {
//   return (
//     <div className="about-section">
//       <div className="about-text">
//         <h4 className="about-subtitle">{subtitle}</h4>
//         <h2 className="about-title">{title}</h2>
//         <div className="underline"></div>
//         <p dangerouslySetInnerHTML={{ __html: description }}></p>
//       </div>
//       <div className="about-image">
//         <img src={image} alt="About Us" />
//       </div>
//     </div>
//   );
// };

// export default AllAboutUs;


import React, { useEffect } from 'react';
import './AllAboutUs.css';
import { motion, useAnimate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AllAboutUs = ({ subtitle, title, description, image }) => {
  const [scope, animate] = useAnimate();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animate(scope.current, { opacity: 1, x: 0 }, { duration: 1 });
    }
  }, [inView, animate, scope]);

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
        initial={{ opacity: 0, x: 100 }} // 👈 right to left animation
      >
        <img src={image} alt="About Us" />
      </motion.div>
    </div>
  );
};

export default AllAboutUs;
