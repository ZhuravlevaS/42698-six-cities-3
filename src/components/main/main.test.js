import React from 'react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history.js';

import Main from './main.jsx';

import offers from './dataCities.js';
import offer from './property.js';

const mockStore = configureStore([]);

it(`<Main/> render`, () => {
  const store = mockStore({
    DATA: {
      offersData: offers,
      city: `Amsterdam`
    },
    STATE: {
      sortType: `popular`,
      hoverProperty: offer
    },
    USER: {
      authorizationStatus: `AUTH`,
      user: {
        email: ``,
      }
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router
            history={history}>
            <Main/>
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
