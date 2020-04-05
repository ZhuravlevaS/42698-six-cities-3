import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";
import {connect} from "react-redux";
import {Operation} from "../../reducer/data/data.js";

const Card = (props) => {
  const {apart: {previewImage, price, rating, title, type, isFavorite, isPremium, id}, onTitleClick, typesClass} = props;
  const ratingRound = Math.round(rating);

  const handleMouseEnter = () => props.onMouseEnter(props.apart);
  const handleMouseLeave = () => props.onMouseLeave();

  const sendFavorit = () => {
    const data = {
      id,
      status: isFavorite
    }
    props.setFavorite(data);
  }

  return (
    <article className={`${typesClass[1]} place-card`} onMouseEnter={handleMouseEnter ? handleMouseEnter : null} onMouseLeave={handleMouseLeave ? handleMouseLeave : null}>
      { isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`cities__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.OFFER(id)}>
          <img className="place-card__image" src={`${previewImage}`} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button" onClick={sendFavorit}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingRound * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={onTitleClick}>
        <Link to={AppRoute.OFFER(id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  apart: PropTypes.exact({
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
  }),
  onTitleClick: PropTypes.func.isRequired,
  typesClass: PropTypes.array.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.DATA.city,
  authStat: state.USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  setFavorite(data) {
    dispatch(Operation.setFavorite(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
