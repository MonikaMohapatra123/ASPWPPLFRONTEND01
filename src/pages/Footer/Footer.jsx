import React, { useEffect, useState } from "react";
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import getStoredData from "../../json/fetchData"; // adjust path if needed

const Footer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = getStoredData();
    setData(stored?.["7"]);
  }, []);

  if (!data) return null;

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-top-inner">
          {data.columns.map((col, idx) => (
            <div className="footer-column" key={idx}>
              <h4>{col.title}</h4>

              {col.items?.map((item, i) => (
                <p key={i}>{item}</p>
              ))}

              {col.addressLines?.map((line, i) => (
                <p key={i}>{line}</p>
              ))}

              {col.phone && <p>{col.phone}</p>}
              {col.email && <p>{col.email}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>{data?.copyright || "© 2025 Your Company — All rights reserved."}</p>
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
