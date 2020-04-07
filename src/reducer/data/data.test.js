import {reducer, ActionCreator, ActionType} from "./data";

const offers = [
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
];

const newOffers = [
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
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 120,
    rating: 4.8,
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
];

const resp = {
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
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: `img/apartment-03.jpg`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offersData: [],
    city: ``,
    hotelsNearby: [],
    favorites: [],
  });
});


it(`Load offers`, () => {
  expect(reducer({
    offersData: [],
    city: ``
  }, ActionCreator.loadOffers(offers))).toEqual({
    offersData: offers,
    city: ``
  });
});

it(`setActiveCity`, () => {
  expect(reducer({
    offersData: [],
    city: ``
  }, ActionCreator.setActiveCity(`PAris`))).toEqual({
    offersData: [],
    city: `PAris`
  });
});

it(`setHotelsNearby`, () => {
  expect(reducer({
    offersData: [],
    city: ``,
    hotelsNearby: []
  }, ActionCreator.setHotelsNearby(offers))).toEqual({
    offersData: [],
    city: ``,
    hotelsNearby: offers
  });
});

it(`setFavorite`, () => {
  expect(reducer({
    offersData: offers,
  }, ActionCreator.setFavorite(resp, {offersData: offers}))).toEqual({
    offersData: newOffers,
  });
});

it(`getFavorite`, () => {
  expect(reducer({
    favorites: [],
  }, ActionCreator.getFavorite(newOffers))).toEqual({
    favorites: newOffers,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting city returns correct action`, () => {
    expect(ActionCreator.setActiveCity(`Paris`)).toEqual({
      type: ActionType.SET_ACTIVE_CITY,
      payload: `Paris`
    });
  });

  it(`Action creator for setting data returns correct action`, () => {
    expect(ActionCreator.loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: {
        offersData: offers
      }
    });
  });

  it(`Action creator for setting hotels hear returns correct action`, () => {
    expect(ActionCreator.setHotelsNearby(offers)).toEqual({
      type: ActionType.SET_HOTELS_NEARBY,
      payload: {
        data: offers
      }
    });
  });

  it(`Action creator for getting favorites returns correct action`, () => {
    expect(ActionCreator.getFavorite(offers)).toEqual({
      type: ActionType.GET_FAVORITE,
      payload: {
        favorites: offers
      }
    });
  });

  const changeFavorite = (hotel, state) => {
    const id = parseInt(hotel.id, 10);
    const newOffers = [...state.offersData];
    const elIndex = newOffers.findIndex((elem) => id === parseInt(elem.id, 10));

    newOffers[elIndex] = hotel;
    return newOffers;
  };

  it(`Action creator for setting hotels hear returns correct action`, () => {
    expect(ActionCreator.setFavorite(resp, {offersData: offers})).toEqual({
      type: ActionType.SET_FAVORITE,
      payload: {
        offersData: changeFavorite(resp, {offersData: offers})
      }
    });
  });
});
