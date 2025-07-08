import React from "react";
import "./AllIntroTemplate.css";
import BreadcrumbTrail from "../BreadcrumbTrail/BreadcrumbTrail";

const AllIntroTemplate = ({ title, image }) => {
  return (
    <div className="AllIntroTemplate">
  <img src={image} alt="AllIntroTemplate" />
  <div className="AllIntroTemplate-para">
    <p>{title}</p>
  </div>
  <div className="breadcrumb-container">
    <BreadcrumbTrail/>
  </div>
</div>

  );
};

export default AllIntroTemplate;
