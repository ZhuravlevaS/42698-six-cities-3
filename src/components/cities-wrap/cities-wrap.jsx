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
  const {aparts, activePin, sortType, aciveCity} = props;
  const locationCity = aparts[0] ? aparts[0].city.location : null;

  return (
    <div className="cities">
      <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{aparts.length} places to stay in {aciveCity}</b>
            <WithSortingVariants
              aparts={aparts}
              city={aciveCity}
              sortType={sortType}
            />
          </section>

        <div className="cities__right-section">
          <section className="cities__map map" style={{backgroundImage: `none`}}>
            <Map
              city={locationCity}
              aparts={aparts}
              activePin={activePin}
            />
          </section>
        </div>
      </div>
    </div>
  )
}

export default connect(
  (state) => ({
    sortType: state.sortType,
  })
)(CitiesWrap);
