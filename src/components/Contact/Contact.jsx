import React from "react";
import "./Contact.css";

const Contact = ({ title, fields, button, image }) => {
  return (
    <div
      className="contact-container"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="contact-form-box">
        <h2 className="contact-title">{title}</h2>
        <form className="contact-form">
          {fields.map((field, index) =>
            field.type === "textarea" ? (
              <textarea
                key={index}
                name={field.name}
                placeholder={field.placeholder}
                rows="4"
                required={field.required}
                className="contact-textarea"
              />
            ) : (
              <input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                className="contact-input"
              />
            )
          )}

          <button type="submit" className="contact-submit-button">
            {button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
