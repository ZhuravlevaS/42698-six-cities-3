import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

const PropertyGallery = (props) => {
  const {imgs, id} = props;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          imgs.map((img) => {
            const {url, id} = img;
            return <div className="property__image-wrapper" key={id}>
              <img className="property__image" src={url} alt="Photo studio"/>
            </div>
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
