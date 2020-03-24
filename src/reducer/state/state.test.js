import {reducer, ActionCreator, ActionType} from "./state.js";
import offer from "../../mocks/property.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    sortType: `popular`,
    hoverProperty: {}
  });
});

it(`Reducer should change sortType`, () => {
  expect(reducer({
    sortType: `popular`
  }, {
    type: ActionType.SET_SORT_TYPE,
    payload: {
      sortType: `to-high`
    },
  })).toEqual({
    sortType: `to-high`
  });
});

it(`Reducer should set hover prop`, () => {
  expect(reducer({
    hoverProperty: {}
  }, {
    type: ActionType.SET_HOVER_PROPERTY,
    payload: {
      property: offer
    },
  })).toEqual({
    hoverProperty: offer
  });
});

it(`Reducer should clean hover prop`, () => {
  expect(reducer({
    hoverProperty: offer
  }, {
    type: ActionType.cleanHoverProperty,
    payload: {
      property: {}
    },
  })).toEqual({
    hoverProperty: {},
    sortType: `popular`
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing sort type returns correct action`, () => {
    expect(ActionCreator.setSortType(`to-high`)).toEqual({
      type: ActionType.SET_SORT_TYPE,
      payload: {
        sortType: `to-high`
      }
    });
  });

  it(`Action creator for setting hover prop returns correct action`, () => {
    expect(ActionCreator.setHoverProperty(offer)).toEqual({
      type: ActionType.SET_HOVER_PROPERTY,
      payload: {
        property: offer
      }
    });
  });

  it(`Action creator for setting hover prop returns correct action`, () => {
    expect(ActionCreator.cleanHoverProperty(offer)).toEqual({
      type: ActionType.CLEAN_HOVER_PROPERTY,
      payload: {
        property: {}
      }
    });
  });
});
