import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Title pressed`, () => {
  const titleClick = jest.fn();
  const apart = {
    img: `img/apartment-01.jpg`,
    price: 320,
    rating: 2,
    description: `Beautiful & luxurious`,
    type: `House`,
    isMarked: false,
    id: 1
  };

  const card = shallow(
      <Card
        apart={apart}
        titleClick={titleClick}
      />
  );

  let title = card.find(`.place-card__name`);

  title.props().onClick();

  expect(titleClick.mock.calls.length).toBe(1);
});
