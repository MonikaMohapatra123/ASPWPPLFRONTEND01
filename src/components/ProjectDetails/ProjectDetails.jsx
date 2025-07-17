



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./PD.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get('https://aspwppl-backend.vercel.app/projects')
      .then((res) => {
        const selected = res.data.find(item => item._id === id);
        setProject(selected);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, [id]);

  if (!project) return <p className="loading-text">Loading...</p>;

  return (
    <div className='project-details-pd'>
      <h2 className="pd-title">{project.projectsname}</h2>
      <p className="pd-description">{project.details}</p>
      <div className="pd-info">
        <p><strong>📍 Location:</strong> {project.location}</p>
        <p><strong>🏢 Client:</strong> {project.client}</p>
         {/* <p><strong> State:</strong> {project.state}</p> */}

      </div>
     <div className="pd-images">
        {project.photo?.map((img, i) => (
          <img key={i} src={img.url} alt={`project-${i}`} className="pd-image" />
        ))}
      </div> 

    </div>
  );
};

export default ProjectDetails;





