import React, { useState } from "react";
import "./AllCompanyContact.css";
import { toast } from "react-toastify";

const AllCompanyContact = ({ office, fields, Api }) => {
  const initialFormData = fields
    .filter((field) => field.type !== "button")
    .reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const onlyDigits = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: onlyDigits }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[0-9]{10,15}$/.test(phone);

  const handleSubmit = async () => {
    console.log("🚀 Submitting contact form:", formData);

    if (!formData.name || !formData.email || !formData.phone || !formData.subject) {
      toast.warn("Please fill all required fields.");
      console.warn("⚠️ Required field missing.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error("Invalid email format.");
      console.warn("⚠️ Invalid email format:", formData.email);
      return;
    }

    if (!isValidPhone(formData.phone)) {
      toast.error("Invalid phone number.");
      console.warn("⚠️ Invalid phone number:", formData.phone);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(Api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log("📬 Server response:", responseData);

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData(initialFormData);
      } else {
        toast.error(responseData.message || "Failed to submit. Please try again.");
        console.error("❌ Submission failed:", responseData);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("❌ Submission error:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contact-container-three-column">
      {/* Office Info */}
      {office.map((item, index) => (
        <div className="contact-column" key={index}>
          <h3>{item.type.toUpperCase()}</h3>
          <div className="underline" />
          <p><i className="fas fa-map-marker-alt icon-blue"></i> {item.address}</p>
          {item.contact && (
            <p><i className="fas fa-phone icon-blue"></i> <strong>Contact:</strong> {item.contact}</p>
          )}
          {item.email && (
            <p><i className="fas fa-envelope icon-blue"></i> <strong>Email:</strong> {item.email}</p>
          )}
        </div>
      ))}

      {/* Contact Form */}
      <div className="contact-column">
        {fields.map((field, idx) => {
          if (field.type === "textarea") {
            return (
              <textarea
                key={idx}
                name={field.name}
                placeholder={field.placeholder}
                rows={field.rows || 5}
                required={field.required}
                value={formData[field.name]}
                onChange={handleChange}
              />
            );
          } else if (field.type === "button") {
            return (
              <button key={idx} onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : field.label}
              </button>
            );
          } else {
            const inputProps = {
              type: field.type,
              name: field.name,
              placeholder: field.placeholder,
              required: field.required,
              value: formData[field.name],
              onChange: handleChange,
            };

            if (field.name === "phone") {
              inputProps.inputMode = "numeric";
              inputProps.pattern = "[0-9]*";
                inputProps.maxLength = 10;
  inputProps.title = "Please enter a 10-digit phone number";
            }

            return <input key={`${field.name}-${idx}`} {...inputProps} />;
          }
        })}
      </div>
    </div>
  );
};

export default AllCompanyContact;
