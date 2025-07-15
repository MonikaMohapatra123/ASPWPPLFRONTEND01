import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    axios
      .get("https://aspwppl-backend.vercel.app/activities")
      .then((res) => {
        const found = res.data.find((item) => item._id === id);
        setService(found);
      })
      .catch((err) => console.error("API error:", err));
  }, [id]);

  if (!service) return <p>Loading...</p>;

  return (
    <div className="service-details">
      <h2>{service.title}</h2>
      <p>{service.details}</p>

      <h3>{service.Header}</h3>
      <p>{service.Sentence}</p>

      <ul>
        {service.Points.map((point) => (
          <li key={point._id}>{point.Point}</li>
        ))}
      </ul>

      <div className="photo-gallery">
        {service.photo.map((img) => (
           <img
            key={img._id}
            src={img.url}
            alt="Gallery"
          />
        ))}
      </div>

      <p>{service.Sentence2}</p>

      <div className="video-container">
        <iframe
          width="100%"
          height="400"
          src={service.Video}
          title="Service Video"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ServiceDetails;
