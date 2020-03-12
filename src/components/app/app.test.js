import React from 'react';
import App from './app.jsx';
import propertyObj from "../../mocks/property.js";
import renderer from 'react-test-renderer';

it(`<App/> render`, () => {

  const tree = renderer
    .create(
        <App apart={propertyObj} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
