import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ text, onClick, iconClass, link, isExternal = false, reverse = false }) => {
  const buttonContent = (
    <>
      {iconClass && <i className={`fa ${iconClass} icon-left`} aria-hidden="true"></i>}
      <span>{text}</span>
    </>
  );

  const buttonClass = `custom-button ${reverse ? 'custom-button-reverse' : ''}`;

  if (link) {
    return isExternal ? (
      <a
        href={link}
        className={buttonClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonContent}
      </a>
    ) : (
      <Link to={link} className={buttonClass}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {buttonContent}
    </button>
  );
};


export default Button;
