import React from 'react';
import Card from './card.jsx';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import property from './property.js';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history.js';

const handleCardMouseEnter = jest.fn((item) => item);
const handleCardMouseLeave = jest.fn();
const mockStore = configureStore([]);

it(`<Card/> render`, () => {
  const store = mockStore({
    hoverProperty: property
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router
            history={history}>
            <Card apart={property}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
              setFavorite={jest.fn()}
              typesClass={[`near-places__list`, `near-places__card`]} />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
