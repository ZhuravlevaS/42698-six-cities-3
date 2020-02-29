import React from 'react';
import PropertyGallery from './property-gallery.jsx';
import renderer from 'react-test-renderer';
import imgs from '../../mocks/imgs.js';

it(`<PropertyGallery/> render`, () => {
  const tree = renderer
    .create(<PropertyGallery imgs={imgs} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
