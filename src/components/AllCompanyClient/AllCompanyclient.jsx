


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const movies = [
//   { title: "Movie 1", url: "project-1.jpg" },
//   { title: "Movie 2", url: "project-2.jpg" },
//   { title: "Movie 3", url: "project-3.jpg" },
//   { title: "Movie 4", url: "project-4.jpg" },
//   { title: "Movie 5", url: "project-5.jpg" },
//   { title: "Movie 6", url: "project-6.jpg" },
//   { title: "Movie 7", url: "project-7.jpg" },
// ];

// const AllCompanyClient = () => {
//   return (
//    <div>
//  <div style={{ textAlign: "center", fontSize: "3rem", fontWeight: "bold", color: "#222",marginTop:"30px" }}>Our Client</div>
//      <div style={{ width: "60%", marginTop: "70px", marginLeft:"320px",marginBottom:'50px'}}>
//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={10}
//         slidesPerView={5} // Default view
//         navigation
//         loop={true}
//         centeredSlides={true}
//         breakpoints={{
//           320: { slidesPerView: 1, spaceBetween: 10 },
//           640: { slidesPerView: 2, spaceBetween: 15 },
//           768: { slidesPerView: 3, spaceBetween: 15 },
//           1024: { slidesPerView: 5, spaceBetween: 20 }, // Show 5 slides at wider screens
//         }}
//       >
//         {movies.map((movie, index) => (
//           <SwiperSlide
//             key={index}
//             style={{ display: "flex", justifyContent: "center" }}
//           >
//             <img
//               src={movie.url}
//               alt={movie.title}
//               width="150" // smaller image size
//               height="150"
//               style={{ borderRadius: "50%", objectFit: "cover" }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom styling for Swiper arrows */}
//       <style jsx>{`
//         .swiper-button-next,
//         .swiper-button-prev {
//           color: black !important;
//           font-size: 1.5rem;
//           margin: -5px 20px;
//         }

//         .swiper-button-prev {
//           left: -20px !important;
//         }

//         .swiper-button-next {
//           right: -20px !important;
//         }
//       `}</style>
//     </div>
//    </div>
//   );
// };

// export default AllCompanyClient;






import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./AllCompanyClient.css"; // External styles

const movies = [
  { title: "Movie 1", url: "project-1.jpg" },
  { title: "Movie 2", url: "project-2.jpg" },
  { title: "Movie 3", url: "project-3.jpg" },
  { title: "Movie 4", url: "project-4.jpg" },
  { title: "Movie 5", url: "project-5.jpg" },
  { title: "Movie 6", url: "project-6.jpg" },
  { title: "Movie 7", url: "project-7.jpg" },
];

const AllCompanyClient = () => {
  return (
    <div className="client-section">
      <h2 className="client-title">Our Client</h2>

      <div className="client-slider-wrapper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          loop={true}
          centeredSlides={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index} className="client-slide">
              <img
                src={movie.url}
                alt={movie.title}
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
