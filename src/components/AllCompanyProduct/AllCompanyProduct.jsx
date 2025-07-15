import React from "react";
import ImageSlider from "./ImageSlider.jsx";
import "./AllCompanyProduct.css";

export default function AllCompanyProduct({
  image,
  topLabel,
  highlight,
  description,
  buttonText,
  imagesSlider
}) {
  return (
    <div className="allcompanyproduct-container">
      {/* Left Section - Image */}
      <div className="allcompanyproductleft-section">
        <img
          src={image}
          alt="Product Visual"
          className="allcompanyproductfacility-image"
        />
      </div>

      {/* Right Section - Content */}
      <div className="allcompanyproductright-section">
        <div className="allcompanyproductcenter-text">
          <p className="allcompanyproducttop-label">{topLabel}</p>

          <h1 className="allcompanyproductheading">
            <span className="allcompanyproducthighlight">{highlight}</span> DIVISION
          </h1>

          <p className="allcompanyproductdescription">{description}</p>
        </div>

        <div className="allcompanyproductimageSlider-Product">
          <ImageSlider images={imagesSlider} />
        </div>

        <button className="allcompanyproductcta-button">
          {buttonText} &#10140;
        </button>
      </div>
    </div>
  );
}
