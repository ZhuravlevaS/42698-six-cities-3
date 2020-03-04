import React from 'react';
import PropertyGallery from './property-gallery.jsx';
import renderer from 'react-test-renderer';
import images from '../../mocks/imgs.js';

it(`<PropertyGallery/> render`, () => {
  const tree = renderer
    .create(<PropertyGallery images={images} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
