import {extend} from "../../utils.js";
import Offer from "../../models/offer.js";

const initialState = {
  offersData: [],
  city: ``,
  hotelsNearby: []
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_HOTELS_NEARBY: `SET_HOTELS_NEARBY`,
  SET_FAVORITE: `SET_FAVORITE`
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
  })
};

const changeFavorite = (hotel, state) => {
  let elIndex = -1;
  let newOffers = state.offersData.filter((el, index) => {
    if(el.id == hotel.id ) {
      elIndex = index; 
    }
    return el.id != hotel.id 
  });
  newOffers[elIndex] = hotel;
  return newOffers;
}

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

  setFavorite: (data) => (dispatch, getState, api) => {
    return api.post(`/favorite/${data.id}/${data.status ? `0` : `1`}`)
      .then((response) => {
        const hotel = Offer.parseOffer(response.data);
        dispatch(ActionCreator.setFavorite(hotel, getState().DATA));
      }).catch((err) => console.log(err));
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
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
