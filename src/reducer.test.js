import {reducer, ActionCreator, ActionType} from "./reducer.js";

const data = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [`img/apartment-02.jpg`, `img/apartment-03.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.370216,
      longitude: 4.8499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 110,
    rating: 4,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 4,
      isPro: true,
      name: `Angelina`
    },
    id: 2,
    images: [`img/apartment-02.jpg`, `img/apartment-03.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.37514938,
      longitude: 4.6738799948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 10,
    rating: 4,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 5,
      isPro: true,
      name: `Angelina`
    },
    id: 3,
    images: [`img/apartment-02.jpg`, `img/apartment-03.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.77537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 1200,
    rating: 3,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 6,
      isPro: true,
      name: `Angelina`
    },
    id: 4,
    images: [`img/apartment-02.jpg`, `img/apartment-03.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 120,
    rating: 1,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 48.8534100,
        longitude: 2.3488000,
        zoom: 10
      },
      name: `Paris`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 7,
      isPro: true,
      name: `Angelina`
    },
    id: 8,
    images: [`img/apartment-03.jpg`, `img/apartment-03.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 48.8594100,
      longitude: 2.34,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-02.jpg`,
    price: 80,
    rating: 4.4,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  }
];


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: ``,
    citiesData: null
  });
});

it(`Reducer should change city`, () => {
  expect(reducer({
    city: `Amsterdam`
  }, {
    type: ActionType.SET_CITY,
    payload: {
      city: `Paris`
    },
  })).toEqual({
    city: `Paris`
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for getting city returns correct action`, () => {
    expect(ActionCreator.setCity(`Paris`)).toEqual({
      type: ActionType.SET_CITY,
      payload: {
        city: `Paris`,
      },
    });
  });

  it(`Action creator for saving data returns correct action`, () => {
    expect(ActionCreator.setCitiesData(data)).toEqual({
      type: ActionType.SET_CITIES_DATA,
      payload: {
        city: `Amsterdam`,
        citiesData: [
          {
            bedrooms: 3,
            city: {
              location: {
                latitude: 52.370216,
                longitude: 4.895168,
                zoom: 10
              },
              name: `Amsterdam`
            },
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
            goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
            host: {
              avatarUrl: `img/avatar-angelina.jpg`,
              id: 3,
              isPro: true,
              name: `Angelina`
            },
            id: 1,
            images: [`img/apartment-02.jpg`, `img/apartment-03.jpg`],
            isFavorite: false,
            isPremium: false,
            location: {
              latitude: 52.370216,
              longitude: 4.8499948,
              zoom: 8
            },
            maxAdults: 4,
            previewImage: `img/apartment-03.jpg`,
            price: 110,
            rating: 4,
            title: `Beautiful & luxurious studio at great location`,
            type: `apartment`
          },
          {
            bedrooms: 3,
            city: {
              location: {
                latitude: 52.370216,
                longitude: 4.895168,
                zoom: 10
              },
              name: `Amsterdam`
            },
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
            goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
            host: {
              avatarUrl: `img/avatar-angelina.jpg`,
              id: 4,
              isPro: true,
              name: `Angelina`
            },
            id: 2,
            images: [`img/apartment-02.jpg`, `img/apartment-03.jpg`],
            isFavorite: false,
            isPremium: false,
            location: {
              latitude: 52.37514938,
              longitude: 4.6738799948,
              zoom: 8
            },
            maxAdults: 4,
            previewImage: `img/apartment-03.jpg`,
            price: 10,
            rating: 4,
            title: `Beautiful & luxurious studio at great location`,
            type: `apartment`
          },
          {
            bedrooms: 3,
            city: {
              location: {
                latitude: 52.370216,
                longitude: 4.895168,
                zoom: 10
              },
              name: `Amsterdam`
            },
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
            goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
            host: {
              avatarUrl: `img/avatar-angelina.jpg`,
              id: 5,
              isPro: true,
              name: `Angelina`
            },
            id: 3,
            images: [`img/apartment-02.jpg`, `img/apartment-03.jpg`],
            isFavorite: false,
            isPremium: false,
            location: {
              latitude: 52.35514938496378,
              longitude: 4.77537499948,
              zoom: 8
            },
            maxAdults: 4,
            previewImage: `img/apartment-03.jpg`,
            price: 1200,
            rating: 3,
            title: `Beautiful & luxurious studio at great location`,
            type: `apartment`
          },
          {
            bedrooms: 3,
            city: {
              location: {
                latitude: 52.370216,
                longitude: 4.895168,
                zoom: 10
              },
              name: `Amsterdam`
            },
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
            goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
            host: {
              avatarUrl: `img/avatar-angelina.jpg`,
              id: 6,
              isPro: true,
              name: `Angelina`
            },
            id: 4,
            images: [`img/apartment-02.jpg`, `img/apartment-03.jpg`],
            isFavorite: false,
            isPremium: false,
            location: {
              latitude: 52.35514938496378,
              longitude: 4.673877537499948,
              zoom: 8
            },
            maxAdults: 4,
            previewImage: `img/apartment-03.jpg`,
            price: 120,
            rating: 1,
            title: `Beautiful & luxurious studio at great location`,
            type: `apartment`
          },
          {
            bedrooms: 3,
            city: {
              location: {
                latitude: 48.8534100,
                longitude: 2.3488000,
                zoom: 10
              },
              name: `Paris`
            },
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
            goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
            host: {
              avatarUrl: `img/avatar-angelina.jpg`,
              id: 7,
              isPro: true,
              name: `Angelina`
            },
            id: 8,
            images: [`img/apartment-03.jpg`, `img/apartment-03.jpg`],
            isFavorite: false,
            isPremium: false,
            location: {
              latitude: 48.8594100,
              longitude: 2.34,
              zoom: 8
            },
            maxAdults: 4,
            previewImage: `img/apartment-02.jpg`,
            price: 80,
            rating: 4.4,
            title: `Beautiful & luxurious studio at great location`,
            type: `apartment`
          }
        ]
      },
    });
  });
});
