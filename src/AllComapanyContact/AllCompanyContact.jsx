
// import React from 'react';
// import './AllCompanyContact.css';

// const AllCompanyContact = () => {
//   return (
//     <div className="contact-container-three-column">
//       {/* Corporate Office */}
//       <div className="contact-column">
//         <h3>CORPORATE OFFICE</h3>
//         <div className="underline" />
//         <p>📍 Level 7, M-agile, Near Pan Card Club Road, Baner, Pune – 411045, Maharashtra, India</p>
//         <p>📞 <strong>Contact:</strong> +91 8956770907</p>
//         <p>📧 <strong>Email:</strong> info@fabtechprojects.com</p>
//       </div>

//       {/* Manufacturing Unit */}
//       <div className="contact-column">
//         <h3>MANUFACTURING UNIT</h3>
//         <div className="underline" />
//         <p>📍 Plot No. 1, 3 & 4, Gat No. 272/273, Nanekarwadi, Chakan, Dist. Pune – 410 501, Maharashtra, India</p>
//       </div>

//       {/* Contact Form */}
//       <div className="contact-column">
//         <input type="text" placeholder="Name*" />
//         <input type="email" placeholder="E-mail*" />
//         <input type="text" placeholder="Phone*" />
//         <input type="text" placeholder="Subject" />
//         <textarea placeholder="Details" rows="5"></textarea>
//         <button>SEND MESSAGE</button>
//       </div>
//     </div>
//   );
// };

// export default AllCompanyContact;


import React from 'react';
import './AllCompanyContact.css';

const AllCompanyContact = () => {
  return (
    <div className="contact-container-three-column">
      {/* Corporate Office */}
      <div className="contact-column">
        <h3>CORPORATE OFFICE</h3>
        <div className="underline" />
        <p><i className="fas fa-map-marker-alt icon-blue"></i> Level 7, M-agile, Near Pan Card Club Road, Baner, Pune – 411045, Maharashtra, India</p>
        <p><i className="fas fa-phone icon-blue"></i> <strong>Contact:</strong> +91 8956770907</p>
        <p><i className="fas fa-envelope icon-blue"></i> <strong>Email:</strong> info@fabtechprojects.com</p>
      </div>

      {/* Manufacturing Unit */}
      <div className="contact-column">
        <h3>MANUFACTURING UNIT</h3>
        <div className="underline" />
        <p><i className="fas fa-map-marker-alt icon-blue"></i> Plot No. 1, 3 & 4, Gat No. 272/273, Nanekarwadi, Chakan, Dist. Pune – 410 501, Maharashtra, India</p>
      </div>

      {/* Contact Form */}
      <div className="contact-column">
        <input type="text" placeholder="Name*" />
        <input type="email" placeholder="E-mail*" />
        <input type="text" placeholder="Phone*" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Details" rows="5"></textarea>
        <button>SEND MESSAGE</button>
      </div>
    </div>
  );
};

export default AllCompanyContact;

