import React from 'react';
import PropertyGallery from './property-gallery.jsx';
import renderer from 'react-test-renderer';

const imgs = [
  {url: `img/apartment-01.jpg`, id: 1},
  {url: `img/room.jpg`, id: 2},
  {url: `img/apartment-02.jpg`, id: 3},
  {url: `img/apartment-03.jpg`, id: 4},
  {url: `img/apartment-02.jpg`, id: 5},
  {url: `img/apartment-01.jpg`, id: 6}
];

it(`<PropertyGallery/> render`, () => {
  const tree = renderer
    .create(<PropertyGallery imgs={imgs} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
