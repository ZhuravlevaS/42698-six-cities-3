import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import City from './city.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`City MouseOver`, () => {
  const onCityClick = jest.fn();
  const cityName = `Paris`;
  const activeClass = `tabs__item--active`;

  const city = shallow(
      <City
        city={cityName}
        onCityClick={onCityClick}
        activeClass={activeClass}/>
  );

  const link = city.find(`.locations__item-link`);

  link.props().onClick();

  expect(onCityClick.mock.calls.length).toBe(1);
});
