import React from "react";
import PropTypes from 'prop-types';

const Review = (props) => {
  const {username, rate, text, date} = props.review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {username}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rate * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date}>{date}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.exact(
      {
        username: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }
  )
};

export default Review;
