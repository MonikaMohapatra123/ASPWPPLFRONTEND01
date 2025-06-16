


import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './NavBar.css';
import { FaChevronDown } from 'react-icons/fa';
import storedData from '../../json/data.json';
import MobileNavBar from './MobileNavBar';

const ResponsiveNavBar = () => {
  const [menu, setMenu] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    if (storedData && storedData["0"]) {
      setMenu(storedData["0"].menu);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (index) => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setActiveIndex(null), 2000);
    setTimeoutId(id);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (item) => {
    if (location.pathname === item.link) return true;
    return item.submenu?.some(subItem => location.pathname === subItem.link);
  };

  return (
    <nav
      className={`NavBarContainer ${isScrolled ? 'scrolled' : 'transparent'}`}
      ref={navRef}
    >
      <Link to="/">
        <img
          src={storedData["0"].logo}
          alt="Logo"
          className="LogoImage"
        />
      </Link>

      <div className="NavContent">
        <ul className="NavBarList">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`NavBarItem ${isActive(item) ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.link !== 'na' ? (
                <Link to={item.link} className={`NavBarLink ${isActive(item) ? 'active' : ''}`}>
                  {item.name}
                  {item.submenu && (
                    <FaChevronDown className={`ChevronIcon ${activeIndex === index ? 'rotate-up' : 'rotate-down'}`} />
                  )}
                </Link>
              ) : (
                <span className={`NavBarLink ${isActive(item) ? 'active' : ''}`}>
                  {item.name}
                  {item.submenu && (
                    <FaChevronDown className={`ChevronIcon ${activeIndex === index ? 'rotate-up' : 'rotate-down'}`} />
                  )}
                </span>
              )}

              {item.submenu && (
                <ul className={`SubMenuList ${activeIndex === index ? 'show' : ''}`}>
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="SubMenuItem">
                      {subItem.link !== 'na' ? (
                        <Link
                          to={subItem.link}
                          className={`SubMenuLink ${location.pathname === subItem.link ? 'active' : ''}`}
                        >
                          {subItem.name}
                        </Link>
                      ) : (
                        <span className={`SubMenuLink ${location.pathname === subItem.link ? 'active' : ''}`}>
                          {subItem.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 1249 });
  return isMobile ? <MobileNavBar /> : <ResponsiveNavBar />;
};

export default NavBar;
