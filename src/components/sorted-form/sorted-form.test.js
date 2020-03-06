import React from 'react';
import SortedForm from './sorted-form.jsx';
import renderer from 'react-test-renderer';

const handleSelectSortType = jest.fn();

it(`<SortedForm/> render`, () => {
  const tree = renderer
    .create(<SortedForm 
      onSelectSortType={handleSelectSortType}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});