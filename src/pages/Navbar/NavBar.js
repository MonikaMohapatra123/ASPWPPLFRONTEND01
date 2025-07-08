import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./NavBar.css";
import { FaChevronDown } from "react-icons/fa";
import { getStoredData } from "../../json/fetchData";
import MobileNavBar from "./MobileNavBar";

const ResponsiveNavBar = () => {
  const [menu, setMenu] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll across all pages
  const location = useLocation(); // Get the current route

  const navRef = useRef(null);

  useEffect(() => {
    const storedData = getStoredData();
    if (storedData && storedData["0"]) {
      const localMenu = storedData["0"].menu;

      const projectMenuIndex = localMenu.findIndex(
        (item) => item.name === "Projects" && item.api
      );

      if (projectMenuIndex !== -1) {
        const apiURL = localMenu[projectMenuIndex].api;

        fetch(apiURL)
          .then((res) => res.json())
          .then((data) => {
            const topProjects = (data || [])
              .filter((proj) => proj.projectsname && proj._id)
              .slice(0, 7)
              .map((proj) => ({
                name: proj.projectsname,
                link: `/projects/${proj._id}`,
              }));



            if (topProjects.length > 0) {
              localMenu[projectMenuIndex].submenu = topProjects;
            }

            setMenu(localMenu);
          })
          .catch((err) => {
            console.error("Failed to fetch project submenu:", err);
            setMenu(localMenu);
          });
      } else {
        setMenu(localMenu);
      }
    }


  const handleScroll = () => {
    const scrolled = window.scrollY > 30;
    setIsScrolled(scrolled);
    console.log("Scrolled:", scrolled);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const handleSubMenuToggle = (index) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActiveIndex(null);
    }, 2000);
    setTimeoutId(id);
  };

  const handleMouseEnter = (index) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    handleSubMenuToggle(index);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHomePage = location.pathname === "/";

  const isActive = (item) => {
    if (location.pathname === item.link) return true;
    if (item.submenu) {
      return item.submenu.some((subItem) => location.pathname === subItem.link);
    }
    return false;
  };
  return (
<nav
  className={`NavBarContainer ${isScrolled ? "scrolled" : "transparent"}`}

  ref={navRef}
>


      <Link to="/">
        <img
          src={getStoredData() && getStoredData()["0"].logo}
          alt="Logo"
          className="LogoImage"
        />
      </Link>

      <div className="NavContent">
        <ul className="NavBarList">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`NavBarItem ${isActive(item) ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.link !== "na" ? (
                <Link
                  to={item.link}
                  className={`NavBarLink ${isActive(item) ? "active" : ""}`}
                >
                  {item.name}
                  {item.submenu && (
                    <FaChevronDown
                      className={`ChevronIcon ${
                        activeIndex === index ? "rotate-up" : "rotate-down"
                      }`}
                    />
                  )}
                </Link>
              ) : (
                <span
                  className={`NavBarLink ${isActive(item) ? "active" : ""}`}
                >
                  {item.name}
                  {item.submenu && (
                    <FaChevronDown
                      className={`ChevronIcon ${
                        activeIndex === index ? "rotate-up" : "rotate-down"
                      }`}
                    />
                  )}
                </span>
              )}
              {item.submenu && (
                <ul
                  className={`SubMenuList ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="SubMenuItem">
                      <Link
                        to={subItem.link}
                        className={`SubMenuLink ${
                          location.pathname === subItem.link ? "active" : ""
                        }`}
                      >
                        {subItem.name}
                      </Link>
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
