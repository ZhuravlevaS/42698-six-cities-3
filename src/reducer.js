import {extend} from "./utils.js";

const InitialState = {
  city: ``,
  citiesData: null,
  sortType: `popular`,
  offers: null
};

const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: {
      city
    },
  }),
  setCitiesData: (citiesData) => ({
    type: ActionType.SET_CITIES_DATA,
    payload: {
      citiesData,
      city: citiesData[0].city.name
    }
  }),
  setSortType: (sortType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: {
      sortType
    }
  })
};

const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_CITIES_DATA: `SET_CITIES_DATA`,
  SET_SORT_TYPE: `SET_SORT_TYPE`
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return extend(state, {
        city: action.payload.city,
      });
    case ActionType.SET_CITIES_DATA:
      return extend(state, {
        citiesData: action.payload.citiesData,
        city: action.payload.city
      });
    case ActionType.SET_SORT_TYPE:
      return extend(state, {
        sortType: action.payload.sortType
      });
    default:
      return InitialState;
  }
};

export {reducer, ActionType, ActionCreator};
