import React from 'react';
import renderer from 'react-test-renderer';
import SortedVariants from './sorted-variants.jsx';
import aparts from '../../mocks/dataCities.js';

it(`<SortedVariants/> render`, () => {
  const onMouseOver = jest.fn();
  const onMouseOut = jest.fn();

  const tree = renderer
    .create(<SortedVariants
      aparts={aparts}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
