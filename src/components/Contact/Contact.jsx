import React from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="form-box">
        <h2>Stay in Touch</h2>
        <form>
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="E-mail*" required />
          <input type="tel" placeholder="Phone*" required />
          <textarea placeholder="Details" rows="4"></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
