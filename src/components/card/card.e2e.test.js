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
    imgs: [
      {
        url: `img/apartment-01.jpg`,
        id: 1
      },
      {
        url: `img/room.jpg`,
        id: 2
      },
      {
        url: `img/apartment-02.jpg`,
        id: 3
      },
      {
        url: `img/apartment-03.jpg`,
        id: 4
      },
      {
        url: `img/apartment-02.jpg`,
        id: 5
      },
      {
        url: `img/apartment-01.jpg`,
        id: 6
      },
    ],
    insides: [
      {
        name: `Wi-Fi`,
        id: 1
      },
      {
        name: `Heating`,
        id: 2
      },
      {
        name: `Kitchen`,
        id: 3
      },
      {
        name: `Fridge`,
        id: 4
      },
      {
        name: `Washing machine`,
        id: 5
      },
      {
        name: `Coffee machine`,
        id: 6
      },
      {
        name: `Dishwasher`,
        id: 7
      },
      {
        name: `Towels`,
        id: 8
      },
      {
        name: `Baby seat`,
        id: 9
      },
      {
        name: `Cabel TV`,
        id: 10
      },
      {
        name: `Soap`,
        id: 11
      },
      {
        name: `Bed`,
        id: 12
      },
    ],
    img: `img/apartment-01.jpg`,
    price: 180,
    rating: 4.9,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    isMarked: true,
    isPremium: true,
    bedrooms: 2,
    adults: 3,
    id: 1,
    cords: [52.3809553943508, 4.939309666406198],
    host: {
      name: `Angellna`,
      avatar: `img/avatar-angelina.jpg`,
      isPro: false,
      description: [
        {
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          id: 1
        },
        {
          text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          id: 2
        },
      ]
    }
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
