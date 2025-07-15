import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AllCompanyProject.css';
import Button from '../Button/Button';
import { motion, useAnimate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AllCompanyProject = ({ title, heading, image, services = [], button }) => {
  // Setup animation hooks
  const [scope, animate] = useAnimate();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animate(scope.current, { opacity: 1, x: 0 }, { duration: 1 });
    }
  }, [inView, animate, scope]);

  return (
    <section className="allcompanyproject-container">
      {/* Animate image from right to left */}
      <motion.div
        ref={(node) => {
          scope.current = node;
          ref(node);
        }}
        className="allcompanyproject-right"
        initial={{ opacity: 0, x: 100 }}
      >
        {image && (
          <img
            src={image}
            alt="ASP Project Highlight"
            className="allcompanyproject-image"
            loading="lazy"
          />
        )}
      </motion.div>

      <div className="allcompanyproject-left">
        {title && <h4>{title}</h4>}

        {heading && (
          <h1>
            <span className="allcompanyproject-bold">EPCC</span> {heading}
          </h1>
        )}

        <div className="allcompanyproject-underline" />

        {services.length > 0 ? (
          <ul className="allcompanyproject-services-list">
            {services.map((item, index) => (
              <li key={index}>▣ {item}</li>
            ))}
          </ul>
        ) : (
          <p>No services listed.</p>
        )}

        {button && (
          <Link to="/projects">
            <Button text={button} />
          </Link>
        )}
      </div>
    </section>
  );
};

AllCompanyProject.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  image: PropTypes.string,
  services: PropTypes.arrayOf(PropTypes.string),
  button: PropTypes.string,
};

export default AllCompanyProject;
