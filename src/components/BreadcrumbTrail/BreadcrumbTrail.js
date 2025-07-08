import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbTrail = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentPath = location.pathname;

  const breadcrumbs = [
    <Link key="home" to="/" className="breadcrumb-link">HOME</Link>,
    ...pathSegments.map((segment, index) => {
      const path = "/" + pathSegments.slice(0, index + 1).join("/");
      const label = segment.replace(/-/g, " ").toUpperCase();

      const isLast = path === currentPath;

      return (
        <span key={path} className="breadcrumb-section">
          {" / "}
          {isLast ? (
            <span className="breadcrumb-current">{label}</span>
          ) : (
            <Link to={path} className="breadcrumb-link">{label}</Link>
          )}
        </span>
      );
    }),
  ];

  return <div className="breadcrumb-trail">{breadcrumbs}</div>;
};

export default BreadcrumbTrail;
