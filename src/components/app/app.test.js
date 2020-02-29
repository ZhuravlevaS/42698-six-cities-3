import React from 'react';
import App from './app.jsx';
import offers from '../../mocks/offers.js';
import renderer from 'react-test-renderer';


it(`<App/> render`, () => {
  const tree = renderer
    .create(<App aparts={offers} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
