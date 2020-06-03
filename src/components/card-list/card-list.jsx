import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';

import {Operation} from "../../reducer/data/data.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";

const CardList = (props) => {
  const {aparts, typesClass, handleCardMouseEnter, handleCardMouseLeave, setFavorite} = props;

  return (
    <div className={`${typesClass[0]} places__list tabs__content`}>
      {
        aparts.map((apart) => {
          return <Card
            key={apart.id}
            apart={apart}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
            typesClass={typesClass}
            setFavorite={setFavorite}
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
          location: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired,
          }),
          name: PropTypes.string.isRequired,
        }),
        description: PropTypes.string.isRequired,
        goods: PropTypes.arrayOf(PropTypes.string),
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
  setFavorite: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleCardMouseEnter(property) {
    dispatch(ActionCreator.setHoverProperty(property));
  },

  handleCardMouseLeave() {
    dispatch(ActionCreator.cleanHoverProperty());
  },

  setFavorite(data) {
    dispatch(Operation.setFavorite(data));
  }
});

export default connect(
    null,
    mapDispatchToProps
)(CardList);
