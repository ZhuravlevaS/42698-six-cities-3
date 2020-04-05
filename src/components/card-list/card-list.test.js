import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import CardList from './card-list.jsx';

import property from './property.js';
import offers from './dataCities.js';

const mockStore = configureStore([]);

it(`<CardList/> render`, () => {
  const store = mockStore({
    hoverProperty: property
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <CardList
            aparts={offers}
            typesClass={[`near-places__list`, `near-places__card`]}
          />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
