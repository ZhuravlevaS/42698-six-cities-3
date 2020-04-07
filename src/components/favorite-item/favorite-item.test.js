import React from 'react';
import FavoriteItem from './favorite-item.jsx';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import renderer from 'react-test-renderer';
import offers from './dataCities';

const city = `Paris`;

it(`<FavoriteItem/> render`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}><FavoriteItem city={city} aparts={offers}/></Router>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
