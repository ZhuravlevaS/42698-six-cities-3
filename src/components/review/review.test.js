import React from 'react';
import Review from './review.jsx';
import renderer from 'react-test-renderer';

const review = {
  id: 3,
  user: {
    id: 1,
    isPro: false,
    name: `karpenter.xo`,
    avatarUrl: `https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/4.jpg`
  },
  rating: 5,
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness ofA quiet cozy and picturesque that hides behind a a river by the unique lightness of`,
  date: `2020-04-01T15:14:31.636Z`
};

it(`<Review/> render`, () => {
  const tree = renderer
    .create(<Review key={review.id} review={review} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
