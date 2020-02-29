import React from "react";
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';

const ReviewList = (props) => {
  const {reviews} = props;
  const maxReviews = 10;
  let reviewsSort = reviews.sort(function (a, b) {
    let numberEarlierDate = new Date(a.date).valueOf();
    let numberLateDate = new Date(b.date).valueOf();

    return numberLateDate - numberEarlierDate;
  });
  reviewsSort = reviewsSort.slice(0, maxReviews);

  return (
    <ul className="reviews__list">
      {
        reviewsSort.map((review) => <Review key={review.id} review={review} />)
      }
    </ul>
  );
};


ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.exact(
      {
        username: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
  )
};

export default ReviewList;
