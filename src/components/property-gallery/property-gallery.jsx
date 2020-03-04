import React from "react";
import PropTypes from 'prop-types';

const PropertyGallery = (props) => {
  const {images} = props;
  const maxImg = 6;
  const imgFixed = images.slice(0, maxImg);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          imgFixed.map((img) => {
            return <div className="property__image-wrapper" key={img}>
              <img className="property__image" src={img} alt="Photo studio"/>
            </div>;
          })
        }
      </div>
    </div>
  );
};

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default PropertyGallery;
