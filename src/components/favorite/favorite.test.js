import React from 'react';
import Favorite from './favorite.jsx';
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import history from '../../history.js';
import configureStore from "redux-mock-store";
import offers from './dataCities';
import thunk from 'redux-thunk';
import axios from "axios";

import renderer from 'react-test-renderer';

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

it(`<Favorite/> render`, () => {
  const store = mockStore({
    DATA: {
      offersData: offers,
      city: `Amsterdam`,
      favorites: offers
    },
    STATE: {
      sortType: `popular`,
      favorites: offers
    },
    USER: {
      authorizationStatus: `AUTH`,
      user: {
        email: ``,
      }
    }
  });

  const loadFavorite = jest.fn();

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router
            history={history}><Favorite loadFavorite={loadFavorite}/></Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
