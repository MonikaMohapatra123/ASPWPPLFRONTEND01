



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MobileNavBar.css';
import { FaPlus } from 'react-icons/fa';
import storedData from '../../json/data.json';

const MobileNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [logo, setLogo] = useState('');

  // Load data from data.json (navbar section)
  useEffect(() => {
    const navData = storedData["0"];
    if (navData && navData.menu) {
      setMenuData(navData.menu);
      setLogo(navData.logo);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <nav className="MobileNavBarContainer">
      {/* Logo & Menu Icon */}
      <div className="MobileNavBarHeader">
        <Link to="/">
          <img src={logo} alt="Logo" className="MobileLogoImage" />
        </Link>
        <div className="MobileMenuIcon" onClick={toggleMenu}>
          <div className={`MenuIconTransition ${menuOpen ? 'open' : ''}`}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul className={`MobileNavBarList ${menuOpen ? 'show' : ''}`}>
        {menuData.map((item, index) => (
          <li key={index} className="MobileNavBarItem">
            {/* If item has submenu */}
            {item.submenu ? (
              <>
                <div
                  className="MobileNavBarLinkWithIcon"
                  onClick={() => toggleSubMenu(index)}
                >
                  {item.name}
                  <FaPlus
                    className={`MobileMenuIcon-ChevronIcon ${
                      activeIndex === index
                        ? 'MobileMenuIcon-rotate-up'
                        : 'MobileMenuIcon-rotate-down'
                    }`}
                  />
                </div>
                {/* Submenu Items */}
                <ul
                  className={`MobileSubMenuList ${
                    activeIndex === index ? 'show' : ''
                  }`}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="MobileSubMenuItem">
                      <Link
                        to={subItem.link}
                        className="MobileSubMenuLink"
                        onClick={() => setMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              // Direct Link
              <Link
                to={item.link}
                className="MobileNavBarLink"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavBar;

