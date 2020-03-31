import React from 'react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Property from './property.jsx';
import renderer from 'react-test-renderer';

import property from './property.js';


const mockStore = configureStore([]);

it(`<Property/> render`, () => {
  const store = mockStore({
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
          <Property apart={property}/>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
