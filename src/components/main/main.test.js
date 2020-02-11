import React from 'react';
import Main from './main.jsx';
import renderer from 'react-test-renderer';

const aparts = [
  {
    img: `img/apartment-01.jpg`,
    price: 320,
    rating: 0,
    description: `Beautiful & luxurious`,
    type: `House`,
    isMarked: false,
    id: 1
  },

  {
    img: `img/room.jpg`,
    price: 200,
    rating: 5,
    description: `Wood and stone place`,
    type: `Private room`,
    isMarked: true,
    id: 2
  },

  {
    img: `img/apartment-02.jpg`,
    price: 152333,
    rating: 2,
    description: `Canal View`,
    type: `Apartment`,
    isMarked: true,
    id: 3
  },
];

it(`<Main/> render`, () => {
  const tree = renderer
    .create(<Main aparts={aparts} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
