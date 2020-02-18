import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';

class CardList extends PureComponent {

  constructor(props) {
    super(props);

    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick() {
    return true;
  }

  render() {
    const {aparts} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content" onMouseOut={this.props.onMouseOut}>
        {
          aparts.map((apart) => <Card key={apart.id} apart={apart} onMouseOver={this.props.onMouseOver} onTitleClick={this.handleTitleClick} />)
        }
      </div>
    );
  }
}

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
};

export default CardList;
