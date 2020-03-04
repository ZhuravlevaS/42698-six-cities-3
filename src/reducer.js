import {extend} from "./utils.js";

const InitialState = {
  city: ``,
  citiesData: null
};

const ActionCreator = {
  getCity: (city) => ({
    type: ActionType.GET_CITY,
    payload: {
      city
    },
  }),
  saveCitiesData: (citiesData) => ({
    type: ActionType.SAVE_CITIES_DATA,
    payload: {
      citiesData,
      city: citiesData[0].city.name
    }
  })
};

const ActionType = {
  GET_CITY: `GET_CITY`,
  SAVE_CITIES_DATA: `SAVE_CITIES_DATA`
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.GET_CITY:
      return extend(state, {
        city: action.payload.city,
      });
    case ActionType.SAVE_CITIES_DATA:
      return extend(state, {
        citiesData: action.payload.citiesData,
        city: action.payload.city
      });
    default:
      return InitialState;
  }
};


export {reducer, ActionType, ActionCreator};
