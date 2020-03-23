import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Map from '../map/map.jsx';
import SortedVariants from '../sorted-variants/sorted-variants.jsx';
import withSorting from '../../hocs/with-sorting.jsx';

const SortType = {
  'to-high': (a, b) => {
    return a.price - b.price;
  },
  'to-low': (a, b) => {
    return b.price - a.price;
  },
  'top-rated': (a, b) => {
    return b.rating - a.rating;
  },
  'default': `popular`
};

const WithSortingVariants = withSorting(SortedVariants, SortType);

const CitiesWrap = (props) => {
  const {aparts, hoverProperty, sortType, activeCity} = props;
  const locationCity = aparts[0] ? aparts[0].city.location : null;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{aparts.length} places to stay in {activeCity}</b>
          <WithSortingVariants
            aparts={aparts}
            city={activeCity}
            sortType={sortType}
          />
        </section>

        <div className="cities__right-section">
          <section className="cities__map map" style={{backgroundImage: `none`}}>
            <Map
              city={locationCity}
              aparts={aparts}
              activePin={hoverProperty}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

CitiesWrap.propTypes = {
  aparts: PropTypes.arrayOf(PropTypes.exact(
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
  activeCity: PropTypes.string,
  sortType: PropTypes.string,
  hoverProperty: PropTypes.exact(
      {
        bedrooms: PropTypes.number,
        city: PropTypes.exact({
          location: PropTypes.exact({
            latitude: PropTypes.number,
            longitude: PropTypes.number,
            zoom: PropTypes.number,
          }),
          name: PropTypes.string,
        }),
        description: PropTypes.string,
        amenities: PropTypes.arrayOf(PropTypes.string),
        host: PropTypes.exact({
          avatarUrl: PropTypes.string,
          id: PropTypes.number,
          isPro: PropTypes.bool,
          name: PropTypes.string
        }),
        id: PropTypes.number,
        images: PropTypes.arrayOf(PropTypes.string),
        isFavorite: PropTypes.bool,
        isPremium: PropTypes.bool,
        location: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
          zoom: PropTypes.number
        }),
        maxAdults: PropTypes.number,
        previewImage: PropTypes.string,
        price: PropTypes.number,
        rating: PropTypes.number,
        title: PropTypes.string,
        type: PropTypes.string
      })
};

export default connect(
    (state) => ({
      sortType: state.STATE.sortType,
      hoverProperty: state.STATE.hoverProperty,
    })
)(CitiesWrap);
