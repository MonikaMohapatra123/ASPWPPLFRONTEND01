



import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Make sure this is added
import footerData from '../../json/data.json'; // adjust path if needed

const Footer = () => {
  const data = footerData["7"];

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-top-inner">
          <div className="footer-column">
            <h4>Quick Links</h4>
            {data.quickLinks.map((item, i) => <p key={i}>{item}</p>)}
          </div>

          <div className="footer-column">
            <h4>EPCC</h4>
            {data.epcc.map((item, i) => <p key={i}>{item}</p>)}
          </div>

          <div className="footer-column">
            <h4>Product & Services</h4>
            {data.products.map((item, i) => <p key={i}>{item}</p>)}
          </div>

          <div className="footer-column">
            <h4>Corporate Office</h4>
            {data.corporateOffice.addressLines.map((line, i) => <p key={i}>{line}</p>)}
            <p>{data.corporateOffice.phone}</p>
            <p>{data.corporateOffice.email}</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © Fabtech 2023 — All rights reserved.</p>
        <div className="footer-icons">
          {/* Manually added icons */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
