import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import "./MobileNavBar.css";
import { getStoredData } from "../../json/fetchData";

const MobileNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const location = useLocation();

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

            setMenuData(localMenu);
          })
          .catch(() => {
            setMenuData(localMenu);
          });
      } else {
        setMenuData(localMenu);
      }
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const isActive = (item) => {
    if (location.pathname === item.link) return true;
    if (item.submenu) {
      return item.submenu.some((subItem) => location.pathname === subItem.link);
    }
    return false;
  };

  const storedLogo = getStoredData()?.["0"]?.logo || "";

  return (
    <nav className="MobileNavBarContainer">
      <div className="MobileNavBarHeader">
        <Link to="/">
          <img src={storedLogo} alt="Logo" className="MobileLogoImage" />
        </Link>
        <div className="MobileMenuIcon" onClick={toggleMenu}>
          <div className={`MenuIconTransition ${menuOpen ? "open" : ""}`}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
        </div>
      </div>

      <ul className={`MobileNavBarList ${menuOpen ? "show" : ""}`}>
        {menuData.map((item, index) => (
          <li key={index} className="MobileNavBarItem">
            {item.submenu ? (
              <>
                <div
                  className={`MobileNavBarLinkWithIcon ${
                    isActive(item) ? "active" : ""
                  }`}
                  onClick={() => toggleSubMenu(index)}
                >
                  {item.name}
                  <FaPlus
                    className={`MobileMenuIcon-ChevronIcon ${
                      activeIndex === index
                        ? "MobileMenuIcon-rotate-up"
                        : "MobileMenuIcon-rotate-down"
                    }`}
                  />
                </div>
                <ul
                  className={`MobileSubMenuList ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="MobileSubMenuItem">
                      <Link
                        to={subItem.link}
                        className={`MobileSubMenuLink ${
                          location.pathname === subItem.link ? "active" : ""
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                to={item.link}
                className={`MobileNavBarLink ${
                  location.pathname === item.link ? "active" : ""
                }`}
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
