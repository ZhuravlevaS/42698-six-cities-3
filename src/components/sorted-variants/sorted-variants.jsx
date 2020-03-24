import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";

import SortedForm from '../sorted-form/sorted-form.jsx';
import CardList from '../card-list/card-list.jsx';

const SortedVariants = (props) => {
  const {setSortType, aparts} = props;

  return (
    <React.Fragment>
      <SortedForm
        onSelectSortType={setSortType}
      />

      <CardList
        aparts={aparts}
        typesClass={[`cities__places-list`, `cities__place-card`]}
      />
    </React.Fragment>
  );
};

SortedVariants.propTypes = {
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
        amenities: PropTypes.arrayOf(PropTypes.string),
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
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setSortType(sortType) {
    dispatch(ActionCreator.setSortType(sortType));
  },
});

export {SortedVariants};
export default connect(
    (state) => ({
      sortType: state.STATE.sortType,
    }),
    mapDispatchToProps
)(SortedVariants);
