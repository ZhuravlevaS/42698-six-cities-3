import React from 'react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from 'react-test-renderer';

import Main from './main.jsx';

import offers from './dataCities.js';

const mockStore = configureStore([]);

it(`<Main/> render`, () => {
  const onMouseOver = jest.fn();
  const onMouseOut = jest.fn();
  const onCityClick = jest.fn();
  const setoffersData = jest.fn();
  const city = `Amsterdam`;
  const store = mockStore({
    sortType: `popular`
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            aparts={offers}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            city={city}
            onCityClick={onCityClick}
            setoffersData={setoffersData}/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
