import React from 'react';
import MainEmpty from './main-empty.jsx';
import renderer from 'react-test-renderer';


it(`<MainEmpty/> render`, () => {
  const tree = renderer
    .create(<MainEmpty city={`Amsterdam`}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
