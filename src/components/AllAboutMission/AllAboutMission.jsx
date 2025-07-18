
import './AllAboutMission.css';

const AllAboutMission = ({ subtitle, title, highlight, description, image }) => {
  if (!subtitle || !title || !highlight || !description || !image) {
    return <p>No data found.</p>;
  }

  return (
    <div className="allaboutmission-container">
      <div className="allaboutmission-left">
        <img src={image} alt={highlight}  />
      </div>
      <div className="allaboutmission-right">
        <h5 className="allaboutmission-subtitle">{subtitle}</h5>
        <h2 className="allaboutmission-title">
          {title} <span>{highlight}</span>
        </h2>
        <hr className="allaboutmission-line" />
        <p className="allaboutmission-text">{description}</p>
      </div>
    </div>
  );
};

export default AllAboutMission;


