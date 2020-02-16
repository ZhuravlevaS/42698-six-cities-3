import React from 'react';
import Card from './card.jsx';
import renderer from 'react-test-renderer';

const apart = {
  img: `img/apartment-02.jpg`,
  price: 132,
  rating: 3,
  description: `Canal View pum`,
  type: `Apartment`,
  isMarked: true,
  isPremium: true,
  id: 3
};

it(`<Card/> render`, () => {
  const tree = renderer
    .create(<Card apart={apart} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
