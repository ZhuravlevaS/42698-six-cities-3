import {extend} from "./utils.js";

const InitialState = {
  city: ``,
  citiesData: null,
  sortType: `popular`,
  hoverProperty: {}
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
  }),
  setHoverProperty: (property) => ({
    type: ActionType.SET_HOVER_PROPERTY,
    payload: {
      property
    }
  }),
  clearHoverProperty: () => ({
    type: ActionType.SET_HOVER_PROPERTY,
    payload: {
      property: {}
    }
  }),
};

const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_CITIES_DATA: `SET_CITIES_DATA`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  SET_HOVER_PROPERTY: `SET_HOVER_PROPERTY`,
  CLEAR_HOVER_PROPERTY: `CLEAR_HOVER_PROPERTY`
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
    case ActionType.SET_HOVER_PROPERTY:
      return extend(state, {
        hoverProperty: action.payload.property
      });
    case ActionType.CLEAR_HOVER_PROPERTY:
      return extend(state, {
        hoverProperty: action.payload.property
      });
    default:
      return InitialState;
  }
};

export {reducer, ActionType, ActionCreator};
