import React from 'react';
import App from './app.jsx';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import offers from './dataCities';
import propertyObj from "./property.js";
import renderer from 'react-test-renderer';

const mockStore = configureStore([]);

it(`<App/> render`, () => {
  const store = mockStore({
    city: `Amsterdam`,
    offersData: offers,
    sortType: `popular`,
    hoverProperty: propertyObj
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App apart={propertyObj} />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
