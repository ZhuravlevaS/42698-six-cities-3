import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

const CardList = (props) => {
  const {aparts, typesClass, handleCardMouseEnter, handleCardMouseLeave} = props;
  const handleTitleClick = () => {
    return true;
  };

  return (
    <div className={`${typesClass[0]} places__list tabs__content`}>
      {
        aparts.map((apart) => {
          return <Card
            key={apart.id}
            apart={apart}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
            onTitleClick={handleTitleClick}
            typesClass={typesClass}
          />;
        })
      }
    </div>
  );
};

CardList.propTypes = {
  aparts: PropTypes.arrayOf(PropTypes.shape(
      {
        bedrooms: PropTypes.number.isRequired,
        city: PropTypes.exact({
          location: PropTypes.exact({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired,
          }),
          name: PropTypes.string.isRequired,
        }),
        description: PropTypes.string.isRequired,
        goods: PropTypes.arrayOf(PropTypes.string).isRequired,
        host: PropTypes.exact({
          avatarUrl: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          isPro: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired
        }),
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        isFavorite: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired
        }),
        maxAdults: PropTypes.number.isRequired,
        previewImage: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      })
  ),
  typesClass: PropTypes.array.isRequired,
  handleCardMouseEnter: PropTypes.func,
  handleCardMouseLeave: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  handleCardMouseEnter(property) {
    dispatch(ActionCreator.setHoverProperty(property));
  },

  handleCardMouseLeave() {
    dispatch(ActionCreator.clearHoverProperty());
  }
});

export default connect(
    (state) => ({
      hoverProperty: state.hoverProperty,
    }),
    mapDispatchToProps
)(CardList);
