import React from 'react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from 'react-test-renderer';

import FeedbackForm from './feedback-form.jsx';


const mockStore = configureStore([]);

it(`<FeedbackForm/> render`, () => {
  const store = mockStore({
    STATE: {
      isReviewSending: false
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <FeedbackForm valid={false}
            onChangeInput={jest.fn(() =>{})}
            onSubmitForm= {jest.fn(() =>{})}
            isResetForm={false}
            cleanState={jest.fn(() =>{})}/>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
