import React from 'react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from 'react-test-renderer';

import CitiesWrap from './cities-wrap.jsx';

import offers from './dataCities';
import property from './property.js';

const mockStore = configureStore([]);

it(`<CitiesWrap/> render`, () => {
  const store = mockStore({
    STATE: {
      sortType: `popular`,
      hoverProperty: property
    },
    DATE: {
      city: `Paris`
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <CitiesWrap aparts={offers}/>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
