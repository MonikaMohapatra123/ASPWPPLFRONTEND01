
import PropTypes from 'prop-types';
import './AllSectionAbout.css';
import Button from '../Button/Button';

const AllSectionAbout = ({
  subtitle,
  title,
  highlight,
  description,
  services = [],
  buttonText,
  link,
  image,
  reverse = false,
}) => {
  const hasContent = subtitle || title || highlight || description || services.length || image;

  if (!hasContent) return <p>No data found.</p>;

  return (
    <div className={`allaboutblock-container ${reverse ? 'reverse' : ''}`}>
      <div className="allaboutblock-left">
        {image && <img src={image} alt={highlight || title} loading="lazy" />}
      </div>

      <div className="allaboutblock-right">
        {subtitle && <h5 className="allaboutblock-subtitle">{subtitle}</h5>}

        {(title || highlight) && (
          <h2 className="allaboutblock-title">
            {title} <span>{highlight}</span>
          </h2>
        )}

        <hr className="allaboutblock-line" />

        {services.length > 0 ? (
          <ul className="allaboutblock-list">
            {services.map((item, index) => (
              <li key={index}>▣ {item}</li>
            ))}
          </ul>
        ) : (
          description && <p className="allaboutblock-text">{description}</p>
        )}

        {buttonText && (
            <Button text={buttonText} link={link} reverse={reverse}/>
        )}
      </div>
    </div>
  );
};

AllSectionAbout.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  highlight: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  image: PropTypes.string,
  reverse: PropTypes.bool,
};

export default AllSectionAbout;
