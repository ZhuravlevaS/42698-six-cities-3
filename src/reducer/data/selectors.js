import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';

const NAMESPACE = NameSpace.DATA;

const getUniqueCities = (offersData) => {
  let cities = offersData.map((el) =>{
    return el.city.name;
  });

  return Array.from(new Set(cities));
};

export const getOffers = (state) => state[NAMESPACE].offersData;

export const getFavorites = (state) => state[NAMESPACE].favorites;

export const getActiveCity = (state) => state[NAMESPACE].city;

export const getCities = createSelector(
    getOffers,
    (offersData) => getUniqueCities(offersData)
);

export const getOffersByCity = createSelector(
    getOffers,
    getActiveCity,
    (offersData, city) => offersData.filter((offer) => offer.city.name === city)
);

export const getFavoriteCities = createSelector(
    getFavorites,
    (favorites) => getUniqueCities(favorites)
);
