import React from 'react';
import City from './city.jsx';
import renderer from 'react-test-renderer';

const city = `Paris`;

it(`<City/> render`, () => {
  const onCityClick = jest.fn();

  const tree = renderer
    .create(<City city={city} onCityClick={onCityClick}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
