import React from 'react';
import CitiesList from './cities-list.jsx';
import renderer from 'react-test-renderer';

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

it(`<CitiesList/> render`, () => {
  const onCityClick = jest.fn();
  const aciveCity = `Paris`;

  const tree = renderer
    .create(<CitiesList cities={cities} onCityClick={onCityClick} aciveCity={aciveCity}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
