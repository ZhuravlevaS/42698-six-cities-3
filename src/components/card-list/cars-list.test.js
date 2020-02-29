import React from 'react';
import CardList from './card-list.jsx';
import offers from '../../mocks/offers.js';
import renderer from 'react-test-renderer';


it(`<Main/> render`, () => {
  const onMouseOver = jest.fn();
  const onMouseOut = jest.fn();

  const tree = renderer
    .create(<CardList aparts={offers} onMouseOver={onMouseOver} onMouseOut={onMouseOut} typesClass={[`near-places__list`, `near-places__card`]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
