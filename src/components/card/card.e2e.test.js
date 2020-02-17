import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Card MouseOver`, () => {
  const handlerMouseOver = jest.fn((apart) => apart);
  const titleClick = jest.fn();

  const apart = {
    img: `img/apartment-01.jpg`,
    price: 320,
    rating: 2,
    title: `Beautiful & luxurious`,
    type: `House`,
    isMarked: false,
    isPremium: true,
    id: 22
  };

  const card = shallow(
      <Card
        apart={apart}
        onMouseOver={handlerMouseOver}
        onTitleClick={titleClick}
      />
  );

  let cardWrap = card.find(`.place-card`);
  let title = card.find(`.place-card__name`);

  title.props().onClick();
  cardWrap.simulate(`mouseover`, handlerMouseOver);

  expect(titleClick.mock.calls.length).toBe(1);
  expect(handlerMouseOver).toHaveBeenNthCalledWith(1, apart);
});
