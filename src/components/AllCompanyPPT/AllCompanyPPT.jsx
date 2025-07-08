<<<<<<< HEAD
import React, { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AllCompanyPPT.css';

const AllCompanyPPT = ({ data }) => {
  const [scope, animate] = useAnimate();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animate(scope.current, { opacity: 1, y: 0 }, { duration: 1 });
    }
  }, [inView, animate, scope]);

  return (
    <motion.div
      ref={(node) => {
        scope.current = node;
        ref(node);
      }}
      className="animated-section"
      initial={{ opacity: 0, y: 60 }}
    >
      <div className="viewerPdf-container">
        <div className="headingPdf-container">
          <h1 className="headingPdf">{data.title}</h1>
        </div>
        <div className="viewerPdf-frame">
          <iframe
            src={data.pdfUrl}
            width="100%"
            height="500"
            allowFullScreen
            frameBorder="0"
            title="Google Slides Viewer"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default AllCompanyPPT;



=======
import React, { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AllCompanyPPT.css';

const AllCompanyPPT = ({ pdf, title }) => {
  const [scope, animate] = useAnimate();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animate(scope.current, { opacity: 1, y: 0 }, { duration: 1 });
    }
  }, [inView, animate, scope]);

  return (
    <motion.div
      ref={(node) => {
        scope.current = node;
        ref(node);
      }}
      className="animated-section"
      initial={{ opacity: 0, y: 60 }}
    >
      <div className="viewerPdf-container">
        <div className="headingPdf-container">
          <h1 className="headingPdf">{title}</h1>
        </div>
        <div className="viewerPdf-frame">
          <iframe
            src={pdf}
            width="100%"
            height="500"
            allowFullScreen
            frameBorder="0"
            title="Google Slides Viewer"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default AllCompanyPPT;
>>>>>>> 103ce2c (WIP: Save progress before rebase)
