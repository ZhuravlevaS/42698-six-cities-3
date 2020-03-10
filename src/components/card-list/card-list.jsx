import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';

const CardList = (props) => {
  const {aparts, onMouseOut, onMouseOver, typesClass} = props;
  const _handleTitleClick = () => {
    return true;
  };

  return (
    <div className={`${typesClass[0]} places__list tabs__content`}>
      {
        aparts.map((apart) => <Card key={apart.id} apart={apart} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onTitleClick={_handleTitleClick} typesClass={typesClass}/>)
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
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  typesClass: PropTypes.array.isRequired,
};

export default CardList;
