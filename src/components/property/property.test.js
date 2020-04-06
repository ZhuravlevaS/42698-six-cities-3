import React from 'react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Property from './property.jsx';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import axios from "axios";

import property from './property.js';
import hotelsNearby from './offersNearby.js';

const Error = {
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

const api = createAPI(()=>{});
const mockStore = configureStore([thunk.withExtraArgument(api)]);
const reviews = [
  {
    id: 3,
    user: {
      id: 1,
      isPro: false,
      name: `karpenter.xo`,
      avatarUrl: `https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/4.jpg`
    },
    rating: 5,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness ofA quiet cozy and picturesque that hides behind a a river by the unique lightness of`,
    date: `2020-04-01T15:14:31.636Z`
  },
  {
    id: 5,
    user: {
      id: 7,
      isPro: false,
      name: `karpenter.xo`,
      avatarUrl: `https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/4.jpg`
    },
    rating: 5,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness ofA quiet cozy and picturesque that hides behind a a river by the unique lightness of`,
    date: `2020-04-01T15:14:31.636Z`
  }
];

const match = {
  params: {
    id: 1
  }
};

it(`<Property/> render`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: `AUTH`,
      user: {
        email: ``,
      }
    },
    STATE: {
      feedbacks: reviews,
      isReviewSending: false,
      isResetForm: false,
    },
    DATA: {
      hotelsNearby,
      offersData: hotelsNearby
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Property apart={property} match={match}/>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
