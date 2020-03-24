import {reducer, ActionCreator, ActionType} from "./data";
import offers from "../../mocks/dataCities.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offersData: [],
    city: ``
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
      payload: offers
    });
  });
});
