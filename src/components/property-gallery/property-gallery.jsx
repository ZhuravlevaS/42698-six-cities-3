import React from "react";
import PropTypes from 'prop-types';

const PropertyGallery = (props) => {
  const {imgs} = props;
  const maxImg = 6;
  const imgFixed = imgs.slice(0, maxImg);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          imgFixed.map((img) => {
            const {url, id} = img;
            return <div className="property__image-wrapper" key={id}>
              <img className="property__image" src={url} alt="Photo studio"/>
            </div>;
          })
        }
      </div>
    </div>
  );
};

PropertyGallery.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.exact(
      {
        url: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
  )
};

export default PropertyGallery;
