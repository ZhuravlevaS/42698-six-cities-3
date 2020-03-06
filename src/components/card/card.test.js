import React from 'react';
import Card from './card.jsx';
import property from '../../mocks/property.js';
import renderer from 'react-test-renderer';

const handlerMouseOver = jest.fn((item) => item);
const handlerMouseOut = jest.fn();
const titleClick = jest.fn();

it(`<Card/> render`, () => {
  const tree = renderer
    .create(<Card apart={property}
      onMouseOver={handlerMouseOver}
      onMouseOut={handlerMouseOut}
      onTitleClick={titleClick}
      typesClass={[`near-places__list`, `near-places__card`]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
