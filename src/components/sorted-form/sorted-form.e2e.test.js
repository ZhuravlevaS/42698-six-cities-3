import React from 'react';
import SortedForm from './sorted-form.jsx';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter(),
});


it(`<SortedForm/> render`, () => {
  const event = {
    target: {
      value: `to-high`
    }
  };
  const handleSelectSortType = jest.fn((event) => event);

  const form = shallow(
    <SortedForm 
      onSelectSortType={handleSelectSortType}
    />
  )


  let select = form.find(`#places-sorting`);
  select.simulate(`change`, handleSelectSortType(event));

  expect(handleSelectSortType).toHaveBeenNthCalledWith(1, event.target.value);
});