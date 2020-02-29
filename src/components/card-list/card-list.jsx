import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';

const CardList = (props) => {
  const {aparts, onMouseOut, onMouseOver, typesClass} = props;
  const _handleTitleClick = () => {
    return true;
  };

  return (
    <div className={`${typesClass[0]} places__list tabs__content`} onMouseOut={onMouseOut}>
      {
        aparts.map((apart) => <Card key={apart.id} apart={apart} onMouseOver={onMouseOver} onTitleClick={_handleTitleClick} typesClass={typesClass}/>)
      }
    </div>
  );
};

CardList.propTypes = {
  aparts: PropTypes.arrayOf(PropTypes.exact(
      {
        imgs: PropTypes.arrayOf(PropTypes.exact(
            {
              url: PropTypes.string.isRequired,
              id: PropTypes.number.isRequired
            })
        ),
        insides: PropTypes.arrayOf(PropTypes.exact(
            {
              name: PropTypes.string.isRequired,
              id: PropTypes.number.isRequired
            })
        ),
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        isMarked: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        bedrooms: PropTypes.number.isRequired,
        adults: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        cords: PropTypes.arrayOf(PropTypes.number),
        host: PropTypes.exact({
          name: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
          isPro: PropTypes.bool.isRequired,
          description: PropTypes.arrayOf(PropTypes.exact(
              {
                text: PropTypes.string.isRequired,
                id: PropTypes.number.isRequired
              })
          ),
        })
      })
  ),
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  typesClass: PropTypes.array.isRequired,
};

export default CardList;
