import {extend} from "../../utils.js";
import Offer from "../../models/offer.js";

const initialState = {
  offersData: [],
  city: ``
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`
};

const ActionCreator = {
  loadOffers: (offersData) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offersData
  }),

  setActiveCity: (city) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: city
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
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {offersData: action.payload});
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {city: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
