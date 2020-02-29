import React from 'react';
import Property from './property.jsx';
import renderer from 'react-test-renderer';
import property from '../../mocks/property.js';

it(`<Property/> render`, () => {
  const onMouseOver = jest.fn();
  const onMouseOut = jest.fn();

  const tree = renderer
    .create(<Property apart={property} onMouseOver={onMouseOver} onMouseOut={onMouseOut}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
