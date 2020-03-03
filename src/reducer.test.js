import {reducer, ActionCreator, ActionType} from "./reducer.js";
import aparts from "./mocks/offers.js";
import data from "./mocks/dataCities.js";


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: `Amsterdam`,
    cityCords: [52.38333, 4.9],
    properties: aparts
  });
});

it(`Reducer should change city`, () => {
  expect(reducer({
    city: `Amsterdam`,
    cityCords: [52.38333, 4.9],
    properties: aparts
  }, {
    type: ActionType.GET_CITY,
    payload: {
      city: `Paris`,
      cityCords: data[`Paris`].cords,
      properties: data[`Paris`].aparts
    },
  })).toEqual({
    city: `Paris`,
    cityCords: [48.8534100, 2.3488000],
    properties: [
      {
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
        price: 1180,
        rating: 4.9,
        title: `Hgkfkadsgkfhfdsk lsdhfglsdfhgl sldfhlsjdh`,
        type: `Apartment`,
        isMarked: true,
        isPremium: true,
        bedrooms: 2,
        adults: 1,
        id: 1,
        cords: [48.8534100, 2.34],
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
      },

      {
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
        img: `img/room.jpg`,
        price: 40,
        rating: 3.5,
        title: `Beautiful & luxurious apartment at great location`,
        type: `Apartment`,
        isMarked: true,
        isPremium: true,
        bedrooms: 2,
        adults: 2,
        id: 2,
        cords: [48.8594100, 2.34],
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
      },
    ]
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for getting city returns correct action`, () => {
    expect(ActionCreator.getCity(`Paris`)).toEqual({
      type: ActionType.GET_CITY,
      payload: {
        city: `Paris`,
        cityCords: [48.8534100, 2.3488000],
        properties: [
          {
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
            price: 1180,
            rating: 4.9,
            title: `Hgkfkadsgkfhfdsk lsdhfglsdfhgl sldfhlsjdh`,
            type: `Apartment`,
            isMarked: true,
            isPremium: true,
            bedrooms: 2,
            adults: 1,
            id: 1,
            cords: [48.8534100, 2.34],
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
          },

          {
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
            img: `img/room.jpg`,
            price: 40,
            rating: 3.5,
            title: `Beautiful & luxurious apartment at great location`,
            type: `Apartment`,
            isMarked: true,
            isPremium: true,
            bedrooms: 2,
            adults: 2,
            id: 2,
            cords: [48.8594100, 2.34],
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
          },
        ]
      },
    });
  });
});
