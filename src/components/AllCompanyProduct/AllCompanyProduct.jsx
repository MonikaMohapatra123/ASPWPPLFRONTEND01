


import React from "react";
import data from "../../json/data.json"; // Adjust path based on your file structure
import ImageSlider from "./ImageSlider.jsx";
import "./AllCompanyProduct.css";

export default function AllCompanyProduct() {
  // Get the data for id 4
  const productData = data["4"];

  return (
    <div className="product-container">
      {/* Left Section - Image */}
      <div className="left-section">
        <img
          src={productData.image} // "project-5.jpg"
          alt="Fabtech Facility"
          className="facility-image"
        />
      </div>

      {/* Right Section - Content */}
      <div className="right-section">
        <div className="center-text">
          <p className="top-label">{productData.topLabel}</p>

          <h1 className="heading">
            <span className="highlight">{productData.highlight}</span> DIVISION
          </h1>

          {/* <hr className="divider" /> */}

          <p className="description">{productData.description}</p>
        </div>

        {/* ImageSlider component */}
        <div className="imageSlider-Product">
          <ImageSlider />
        </div>

        <button className="cta-button">
          {productData.buttonText} &#10140;
        </button>
      </div>
    </div>
  );
}
