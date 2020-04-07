import {extend} from "../../utils.js";
import Offer from "../../models/offer.js";
import {createAPI} from "../../api.js";
import {AppRoute} from "../../const.js";
import history from '../../history.js';

const initialState = {
  offersData: [],
  city: ``,
  hotelsNearby: [],
  favorites: []
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_HOTELS_NEARBY: `SET_HOTELS_NEARBY`,
  SET_FAVORITE: `SET_FAVORITE`,
  GET_FAVORITE: `GET_FAVORITE`
};

const ActionCreator = {
  loadOffers: (offersData) => ({
    type: ActionType.LOAD_OFFERS,
    payload: {
      offersData
    }
  }),

  setActiveCity: (city) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: city
  }),

  setHotelsNearby: (data)=> ({
    type: ActionType.SET_HOTELS_NEARBY,
    payload: {
      data
    }
  }),

  setFavorite: (hotel, state) => ({
    type: ActionType.SET_FAVORITE,
    payload: {
      offersData: changeFavorite(hotel, state)
    }
  }),

  getFavorite: (data) => ({
    type: ActionType.GET_FAVORITE,
    payload: {
      favorites: data
    }
  }),
};

const changeFavorite = (hotel, state) => {
  const id = parseInt(hotel.id, 10);
  const newOffers = [...state.offersData];
  const elIndex = newOffers.findIndex((elem) => id === parseInt(elem.id, 10));

  newOffers[elIndex] = hotel;
  return newOffers;
};

const onUnauthorized = () => {
  history.push(AppRoute.LOGIN);
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offersData = Offer.parseOffers(response.data);

        dispatch(ActionCreator.loadOffers(offersData));
        dispatch(ActionCreator.setActiveCity(offersData[0].city.name));
      }).catch((err) => err);
  },

  loadHotelsNearby: (data) => (dispatch, getState, api) => {
    return api.get(`/hotels/${data.id}/nearby`)
      .then((response) => {
        const hotels = Offer.parseOffers(response.data);

        dispatch(ActionCreator.setHotelsNearby(hotels));
      }).catch((err) => err);
  },

  setFavorite: (data) => (dispatch, getState) => {
    const api = createAPI(onUnauthorized);
    return api.post(`/favorite/${data.id}/${data.status ? `0` : `1`}`)
      .then((response) => {
        const hotel = Offer.parseOffer(response.data);
        dispatch(ActionCreator.setFavorite(hotel, getState().DATA));
      }).catch((err)=> err);
  },

  getFavorite: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const hotels = Offer.parseOffers(response.data);
        dispatch(ActionCreator.getFavorite(hotels));
      }).catch((err)=> err);
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offersData: action.payload.offersData
      });
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.SET_HOTELS_NEARBY:
      return extend(state, {
        hotelsNearby: action.payload.data
      });
    case ActionType.SET_FAVORITE:
      return extend(state, {
        offersData: action.payload.offersData
      });
    case ActionType.GET_FAVORITE:
      return extend(state, {
        favorites: action.payload.favorites
      });
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
