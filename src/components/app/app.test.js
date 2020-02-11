import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

const aparts = [
  {
    img: `img/apartment-01.jpg`,
    price: 320,
    rating: 2,
    description: `Beautiful & luxurious`,
    type: `House`,
    isMarked: false,
    id: 1
  },

  {
    img: `img/room.jpg`,
    price: 180,
    rating: 5,
    description: `Wood and stone place`,
    type: `Private room`,
    isMarked: true,
    id: 2
  },

  {
    img: `img/apartment-02.jpg`,
    price: 152,
    rating: 3,
    description: `Canal View`,
    type: `Apartment`,
    isMarked: true,
    id: 3
  },
];

it(`<App/> render`, () => {
  const tree = renderer
    .create(<App aparts={aparts} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
