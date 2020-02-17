import React from 'react';
import Card from './card.jsx';
import renderer from 'react-test-renderer';

const apart = {
  img: `img/apartment-02.jpg`,
  price: 132,
  rating: 3,
  title: `Canal View pum`,
  type: `Apartment`,
  isMarked: true,
  isPremium: true,
  id: 3
};

const handlerMouseOver = jest.fn((item) => item);
const titleClick = jest.fn();

it(`<Card/> render`, () => {
  const tree = renderer
    .create(<Card apart={apart}
      onMouseOver={handlerMouseOver}
      onTitleClick={titleClick} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
