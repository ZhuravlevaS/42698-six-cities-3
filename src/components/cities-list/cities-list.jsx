import React from 'react';
import PropTypes from 'prop-types';

import City from '../city/city.jsx';

const CitiesList = (props) => {
  const {cities, onCityClick, aciveCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => <City key={city} city={city} onCityClick={onCityClick} activeClass={city === aciveCity ? `tabs__item--active` : ``}/>)
      }
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  onCityClick: PropTypes.func.isRequired,
  aciveCity: PropTypes.string.isRequired
};

export default CitiesList;
