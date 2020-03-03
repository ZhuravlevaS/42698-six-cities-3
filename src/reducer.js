import {extend} from "./utils.js";
import aparts from "./mocks/offers.js";
import data from "./mocks/dataCities.js";

const citiesData = data;

const initialState = {
  city: `Amsterdam`,
  cityCords: [52.38333, 4.9],
  properties: aparts
};

const ActionCreator = {
  getCity: (city) => ({
    type: ActionType.GET_CITY,
    payload: {
      city,
      cityCords: citiesData[city].cords,
      properties: citiesData[city].aparts
    },
  }),
};

const ActionType = {
  GET_CITY: `GET_CITY`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_CITY:
      return extend(state, {
        city: action.payload.city,
        cityCords: action.payload.cityCords,
        properties: action.payload.properties,
      });
    default:
      return initialState;
  }
};


export {reducer, ActionType, ActionCreator};
