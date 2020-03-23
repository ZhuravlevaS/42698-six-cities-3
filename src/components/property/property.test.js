import React from 'react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Property from './property.jsx';
import renderer from 'react-test-renderer';

import property from './property.js';
import offers from './dataCities';

const mockStore = configureStore([]);

it(`<Property/> render`, () => {
  const store = mockStore({
    city: `Amsterdam`,
    offersData: offers
  });
  const onMouseOver = jest.fn();
  const onMouseOut = jest.fn();

  const tree = renderer
    .create(
        <Provider store={store}>
          <Property apart={property} onMouseOver={onMouseOver} onMouseOut={onMouseOut}/>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
