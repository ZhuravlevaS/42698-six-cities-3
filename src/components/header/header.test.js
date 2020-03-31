import React from 'react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Header from './header.jsx';
import renderer from 'react-test-renderer';

const mockStore = configureStore([]);

it(`<Header/> render`, () => {
  const store = mockStore({
    USER: {
      user: {
        email: ``,
      }
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Header/>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
