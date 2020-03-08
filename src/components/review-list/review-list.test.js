import React from 'react';
import ReviewList from './review-list.jsx';
import renderer from 'react-test-renderer';

const reviews = [
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    username: `Max`,
    rate: 3,
    date: `December 24, 2018`,
    id: 1
  },
  {
    text: `A quiet cozy and picturesque lightness of Amsterdam. The building is green and from 18th century.`,
    username: `Ray`,
    rate: 5,
    date: `January 24, 2017`,
    id: 2
  }
];

it(`<ReviewList/> render`, () => {
  const tree = renderer
    .create(<ReviewList reviews={reviews} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
