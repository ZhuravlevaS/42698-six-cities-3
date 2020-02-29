import React from 'react';
import Main from './main.jsx';
import renderer from 'react-test-renderer';
import offers from '../../mocks/offers.js';


it(`<Main/> render`, () => {
  const onMouseOver = jest.fn();
  const onMouseOut = jest.fn();
  const tree = renderer
    .create(<Main aparts={offers} onMouseOver={onMouseOver} onMouseOut={onMouseOut}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
