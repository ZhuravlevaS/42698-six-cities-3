import React from 'react';
import Card from './card.jsx';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import property from '../../mocks/property.js';
import renderer from 'react-test-renderer';

const handleCardMouseEnter = jest.fn((item) => item);
const handleCardMouseLeave = jest.fn();
const titleClick = jest.fn();
const mockStore = configureStore([]);

it(`<Card/> render`, () => {
  const store = mockStore({
    hoverProperty: property
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Card apart={property}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
            onTitleClick={titleClick}
            typesClass={[`near-places__list`, `near-places__card`]} />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
