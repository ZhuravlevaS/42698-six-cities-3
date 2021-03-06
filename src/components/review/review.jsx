import React from "react";
import PropTypes from 'prop-types';

const DATE_OPTIONS = {
  month: `long`,
  year: `numeric`,
};

const Review = (props) => {
  const {user, rating, comment, date} = props.review;
  const dateClass = new Date(date);

  const dateNormal = dateClass.toLocaleString(`en-US`, DATE_OPTIONS);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{dateNormal}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.shape(
      {
        comment: PropTypes.string,
        date: PropTypes.string,
        id: PropTypes.number,
        rating: PropTypes.number,
        user: PropTypes.shape({
          avatarUrl: PropTypes.string,
          id: PropTypes.number,
          isPro: PropTypes.bool,
          name: PropTypes.string
        })
      }
  )
};

export default Review;
