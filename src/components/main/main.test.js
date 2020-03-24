import React from 'react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from 'react-test-renderer';

import Main from './main.jsx';

import offers from './dataCities.js';
import offer from './property.js';

const mockStore = configureStore([]);

it(`<Main/> render`, () => {
  const store = mockStore({
    DATA: {
      offersData: offers,
      city: `Amsterdam`
    },
    STATE: {
      sortType: `popular`,
      hoverProperty: offer
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
