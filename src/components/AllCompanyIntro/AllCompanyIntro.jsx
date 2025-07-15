import React from "react";
import "./AllCompanyIntro.css";
import Button from "../Button/Button";

const AllCompanyIntro = ({
  established,
  title,
  companyName,
  description,
  image,
  buttonText,
  link,
}) => {
  const [titleFirstWord, ...titleRest] = title.split(" ");

  return (
    <section className="company-intro">
      <div className="company-left-side">
        {established && (
          <div className="company-established">{established}</div>
        )}

        <h2 className="company-title">
          <span>{titleFirstWord}</span>
          <span> {titleRest.join(" ")}</span>
        </h2>

        <hr className="company-divider" />

        <p className="company-description">{description}</p>

        {buttonText && link && <Button text={buttonText} link={link} />}
      </div>

      <div className="company-right-side">
        <img
          src={image}
          alt={`${companyName} office`}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AllCompanyIntro;
