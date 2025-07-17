




// import React, { useEffect, useState } from "react";
// import "./Leadership.css";
// import { getStoredData } from "../../json/fetchData";
// import Loader from "../Loader/Loader"; // update path as needed

// const Leadership = () => {
//   const [directors, setDirectors] = useState(null);
//   const [selectedDirector, setSelectedDirector] = useState(null);

//   useEffect(() => {
//     const fetchTeam = async () => {
//       const data = await getStoredData();
//       setDirectors(data["2"]?.team || []);
//     };
//     fetchTeam();
//   }, []);

//   const handleCardClick = (member) => {
//     setSelectedDirector(member);
//   };

//   const handleCloseModal = () => {
//     setSelectedDirector(null);
//   };

//   if (!directors) return <Loader />;

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
import AllIntroTemplate from "../AllIntroTemplate/AllIntroTemplate"; // 👈 import here

const Leadership = () => {
  const [directors, setDirectors] = useState(null);
  const [introData, setIntroData] = useState(null); // 👈 for intro content
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

  const handleCloseModal = () => {
    setSelectedDirector(null);
  };

  if (!directors || !introData) return <Loader />;

  return (
    <>
      {/* 👇 AllIntroTemplate at the top */}
      <AllIntroTemplate title={introData.subtitle} image={introData.image} />

      <div className="directors-container">
        {directors.map((member, index) => (
          <div
            className="director-card"
            key={index}
            onClick={() => handleCardClick(member)}
          >
            <img
              src={`/${member.image}`}
              alt={member.name}
              className="director-image"
            />
            <h4 className="director-name">{member.name}</h4>
            <p className="director-position">{member.position}</p>
          </div>
        ))}
      </div>

      {selectedDirector && (
        <div className="director-modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <img
              src={`/${selectedDirector.image}`}
              alt={selectedDirector.name}
              className="modal-image"
            />
            <div className="modal-info">
              <h3 className="modal-name">{selectedDirector.name}</h3>
              <p className="modal-position">{selectedDirector.position}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Leadership;

