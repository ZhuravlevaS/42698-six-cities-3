import React from 'react';
import Review from './review.jsx';
import renderer from 'react-test-renderer';

const review = {
  text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  username: `Max`,
  rate: 3,
  date: `December 24, 2018`,
  id: 1
};

it(`<Review/> render`, () => {
  const tree = renderer
    .create(<Review key={review.id} review={review} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
