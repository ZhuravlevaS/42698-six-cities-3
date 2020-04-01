import {extend} from "../../utils.js";
import Offer from "../../models/offer.js";

const initialState = {
  offersData: [],
  city: ``,
  hotelsNearby: null
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_HOTELS_NEARBY: `SET_HOTELS_NEARBY`
};

const ActionCreator = {
  loadOffers: (offersData) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offersData
  }),

  setActiveCity: (city) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: city
  }),

  setHotelsNearb: (data)=> ({
    type: ActionType.SET_HOTELS_NEARBY,
    payload: data
  })
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offersData = Offer.parseOffers(response.data);

        dispatch(ActionCreator.loadOffers(offersData));
        dispatch(ActionCreator.setActiveCity(offersData[0].city.name));
      });
  },

  loadHotelsNearby: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        const hotels = Offer.parseOffers(response.data);

        dispatch(ActionCreator.setHotelsNearb(hotels));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {offersData: action.payload});
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.SET_HOTELS_NEARBY:
      return extend(state, {hotelsNearby: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
