import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Card MouseOver`, () => {
  const handlerMouseOver = jest.fn((apart) => apart);

  const apart = {
    img: `img/apartment-01.jpg`,
    price: 320,
    rating: 2,
    description: `Beautiful & luxurious`,
    type: `House`,
    isMarked: false,
    isPremium: true,
    id: 22
  };

  const card = shallow(
      <Card
        apart={apart}
        onMouseOver={handlerMouseOver}
      />
  );

  let cardWrap = card.find(`.place-card`);

  cardWrap.simulate(`mouseover`, handlerMouseOver);

  expect(handlerMouseOver).toHaveBeenNthCalledWith(1, apart);
});
