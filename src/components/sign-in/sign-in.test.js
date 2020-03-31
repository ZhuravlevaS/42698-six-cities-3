import React from 'react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import SignIn from './sign-in.jsx';
import renderer from 'react-test-renderer';

const mockStore = configureStore([]);

it(`<SignIn/> render`, () => {
  const store = mockStore({
    DATA: {
      city: `Amsterdam`
    },
    USER: {
      authorizationStatus: `NO_AUTH`,
      user: {
        email: ``,
      }
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <SignIn/>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
