import React from 'react';
import App from './app.jsx';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import offers from './dataCities';
import offer from "./property.js";
import renderer from 'react-test-renderer';

const mockStore = configureStore([]);

it(`<App/> render`, () => {
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
          <App apart={offer} />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
