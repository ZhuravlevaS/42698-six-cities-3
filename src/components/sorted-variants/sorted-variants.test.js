import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import SortedVariants from './sorted-variants.jsx';
import aparts from './dataCities.js';

const mockStore = configureStore([]);

it(`<SortedVariants/> render`, () => {
  const onMouseOver = jest.fn();
  const onMouseOut = jest.fn();

  const store = mockStore({
    sortType: `popular`
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <SortedVariants
            aparts={aparts}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            city={`Amsterdam`}/>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
