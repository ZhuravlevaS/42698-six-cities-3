import React from 'react';
import Map from './map.jsx';
import renderer from 'react-test-renderer';
import offers from '../../mocks/offers.js';

const cityCords = [52.38333, 4.9];
const cords = offers.map((apart) => apart.cords);

it(`<Map/> render`, () => {
  const tree = renderer
    .create(<Map city={cityCords} cords={cords}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
