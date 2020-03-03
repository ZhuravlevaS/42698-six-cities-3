import {extend} from "./utils.js";

const InitialState = {
  city: ``,
  citiesData: {}
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
      city: Object.keys(citiesData)[0]
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
        cityData: action.payload.citiesData
      })
    default:
      return InitialState;
  }
};


export {reducer, ActionType, ActionCreator};
