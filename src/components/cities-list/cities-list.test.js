import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import CitiesList from './cities-list.jsx';

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const mockStore = configureStore([]);

it(`<CitiesList/> render`, () => {
  const store = mockStore({
    city: `Paris`
  });
  const onCityClick = jest.fn();
  const activeCity = `Paris`;

  const tree = renderer
    .create(<Provider store={store}><CitiesList cities={cities} onCityClick={onCityClick} activeCity={activeCity}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
