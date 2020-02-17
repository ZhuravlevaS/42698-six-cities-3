import React from 'react';
import CardList from './card-list.jsx';
import renderer from 'react-test-renderer';

const aparts = [
  {
    img: `img/apartment-01.jpg`,
    price: 320,
    rating: 0,
    title: `Beautiful & luxurious`,
    type: `House`,
    isMarked: false,
    isPremium: false,
    id: 1
  },

  {
    img: `img/room.jpg`,
    price: 200,
    rating: 5,
    title: `Wood and stone place`,
    type: `Private room`,
    isMarked: true,
    isPremium: false,
    id: 2
  },

  {
    img: `img/apartment-02.jpg`,
    price: 152333,
    rating: 2,
    title: `Canal View`,
    type: `Apartment`,
    isMarked: true,
    isPremium: false,
    id: 3
  },
];

it(`<Main/> render`, () => {
  const tree = renderer
    .create(<CardList aparts={aparts} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
