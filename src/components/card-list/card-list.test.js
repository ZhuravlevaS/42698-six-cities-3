import React from 'react';
import CardList from './card-list.jsx';
import offers from '../../mocks/dataCities.js';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import property from '../../mocks/property.js';

const mockStore = configureStore([]);

it(`<CardList/> render`, () => {
  const onMouseOver = jest.fn();
  const onMouseOut = jest.fn();
  const store = mockStore({
    hoverProperty: property
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <CardList
            aparts={offers}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            typesClass={[`near-places__list`, `near-places__card`]}
          />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
