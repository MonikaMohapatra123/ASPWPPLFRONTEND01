import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "./AllCompanyClient.css";

const AllCompanyClient = ({ clients = [], title }) => {
  return (
    <div className="client-section">
      <h2 className="client-title">{title}</h2>

      <hr className="client-SectionLine"></hr>

      <div className="client-slider-wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          centeredSlides={false}
          navigation
          autoplay={{
            delay: 2000,            // Time between slides
            disableOnInteraction: false,
            reverseDirection: false, // Right to left
          }}
        >

          
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="client-slide">
              <img
                src={client.url}
                alt={client.title || "image"}
                className="client-logo"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AllCompanyClient;
