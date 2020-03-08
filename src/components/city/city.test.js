import React from 'react';
import City from './city.jsx';
import renderer from 'react-test-renderer';

const city = `Paris`;

it(`<City/> render`, () => {
  const onCityClick = jest.fn();
  const activeClass = `tabs__item--active`;

  const tree = renderer
    .create(<City city={city} onCityClick={onCityClick} activeClass={activeClass}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
