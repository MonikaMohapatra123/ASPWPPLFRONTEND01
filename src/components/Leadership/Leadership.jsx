

// import React, { useEffect, useState } from "react";
// import "./Leadership.css";
// import { getStoredData } from "../../json/fetchData";
// import Loader from "../Loader/Loader";


// const Leadership = () => {
//   const [directors, setDirectors] = useState(null);
//   const [introData, setIntroData] = useState(null); // 👈 for intro content
//   const [selectedDirector, setSelectedDirector] = useState(null);

//   useEffect(() => {
//     const fetchTeam = async () => {
//       const data = await getStoredData();
//       setDirectors(data["2"]?.team || []);
//       setIntroData({
//         subtitle: data["2"]?.Introsubtitle || "",
//         image: data["2"]?.Introimage || "",
//       });
//     };
//     fetchTeam();
//   }, []);

//   const handleCardClick = (member) => {
//     setSelectedDirector(member);
//   };

//   const handleCloseModal = () => {
//     setSelectedDirector(null);
//   };

//   if (!directors || !introData) return <Loader />;

//   return (
//     <>
    

//       <div className="directors-container">
//         {directors.map((member, index) => (
//           <div
//             className="director-card"
//             key={index}
//             onClick={() => handleCardClick(member)}
//           >
//             <img
//               src={`/${member.image}`}
//               alt={member.name}
//               className="director-image"
//             />
//             <h4 className="director-name">{member.name}</h4>
//             <p className="director-position">{member.position}</p>
//           </div>
//         ))}
//       </div>

//       {selectedDirector && (
//         <div className="director-modal">
//           <div className="modal-content">
//             <button className="close-button" onClick={handleCloseModal}>
//               &times;
//             </button>
//             <img
//               src={`/${selectedDirector.image}`}
//               alt={selectedDirector.name}
//               className="modal-image"
//             />
//             <div className="modal-info">
//               <h3 className="modal-name">{selectedDirector.name}</h3>
//               <p className="modal-position">{selectedDirector.position}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Leadership;





import React, { useEffect, useState } from "react";
import "./Leadership.css";
import { getStoredData } from "../../json/fetchData";
import Loader from "../Loader/Loader";

const Leadership = () => {
  const [directors, setDirectors] = useState(null);
  const [introData, setIntroData] = useState(null);
  const [selectedDirector, setSelectedDirector] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      const data = await getStoredData();
      setDirectors(data["2"]?.team || []);
      setIntroData({
        subtitle: data["2"]?.Introsubtitle || "",
        image: data["2"]?.Introimage || "",
      });
    };
    fetchTeam();
  }, []);

  const handleCardClick = (member) => {
    setSelectedDirector(member);
  };

  const handleClosePopup = () => {
    setSelectedDirector(null);
  };

  if (!directors || !introData) return <Loader />;

  return (
    <div className="key-members-container">
      <div className="key-members-grid">
        {directors.map((member, index) => (
          <div
            key={index}
            className="key-member-card"
            onClick={() => handleCardClick(member)}
          >
            <div className="key-member-photo">
              <img src={`/${member.image}`} alt={member.name} className="member-photo" />
            </div>
            <div className="key-member-details">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedDirector && (
        <div className={`menu-bar ${selectedDirector ? "active" : ""}`}>
          <button className="close-button" onClick={handleClosePopup}>X</button>
          <img
            src={`/${selectedDirector.image}`}
            alt={selectedDirector.name}
            className="menu-photo"
          />
          <h3>{selectedDirector.name}</h3>
          <p><strong>{selectedDirector.position}</strong></p>
          {selectedDirector.description && <p>{selectedDirector.description}</p>}
        </div>
      )}
    </div>
  );
};

export default Leadership;


