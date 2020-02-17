import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

class Card extends PureComponent {

  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver() {
    this.props.onMouseOver(this.props.apart);
  }

  render() {
    const {img, price, rating, description, type, isMarked, isPremium} = this.props.apart;
    const {onTitleClick} = props;
    const ratingRound = Math.round(rating);

    return (
      <article className="cities__place-card place-card" onMouseOver={this.handleMouseOver}>
        { isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={`${img}`} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button button ${isMarked ? `place-card__bookmark-button--active` : ``}`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">{isMarked ? `In bookmarks` : `To bookmarks`}</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${ratingRound * 20}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name" onClick={onTitleClick}>
            <a href="#">{description}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

Card.propTypes = {
  apart: PropTypes.exact({
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isMarked: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }),
  onMouseOver: PropTypes.func
};

export default Card;
