<<<<<<< HEAD




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
=======
import React, { useEffect, useState } from "react";
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getStoredData } from "../../json/fetchData";

const Footer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = getStoredData();
    setData(stored?.["7"]);
  }, []);

  if (!data) return null;
  console.log(data);

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-top-inner">
          {data.columns.map((col, idx) => (
            <div className="footer-column" key={idx}>
              <h4>{col.title}</h4>

              {col.items && col.items.map((item, i) => <p key={i}>{item}</p>)}

              {col.addressLines &&
                col.addressLines.map((line, i) => <p key={i}>{line}</p>)}

              {col.phone && <p>{col.phone}</p>}
              {col.email && <p>{col.email}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>{data?.copyright}</p>
        <div className="footer-icons">
          {data.socialLinks?.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fa-brands fa-${link.platform}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> 103ce2c (WIP: Save progress before rebase)
