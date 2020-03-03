import React from 'react';
import PropTypes from 'prop-types';

import City from '../city/city.jsx';

const CitiesList = (props) => {
  const {cities, onCityClick} = props;

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => <City key={city} city={city} onCityClick={onCityClick}/>)
      }
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  onCityClick: PropTypes.func.isRequired,
};

export default CitiesList;
