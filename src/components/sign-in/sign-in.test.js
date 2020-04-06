import React from 'react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import SignIn from './sign-in.jsx';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history.js';

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
          <Router
            history={history}>
            <SignIn/>
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
