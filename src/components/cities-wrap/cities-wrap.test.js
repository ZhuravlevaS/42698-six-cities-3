import React from 'react';
import CitiesWrap from './cities-wrap.jsx';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import property from '../../mocks/property.js';
import renderer from 'react-test-renderer';
import offers from '../../mocks/dataCities';

const mockStore = configureStore([]);

it(`<CitiesWrap/> render`, () => {
  const store = mockStore({
    sortType: `popular`,
    hoverProperty: property
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <CitiesWrap
            aparts={offers}
            activeCity={`Paris`} />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
