import {reducer, ActionCreator, ActionType} from "./state.js";
import offer from "../../mocks/property.js";
import reviews from "../../mocks/reviews.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    sortType: `popular`,
    hoverProperty: {},
    isReviewSending: false,
    isResetForm: false,
    feedbacks: []
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
    type: ActionType.CLEAN_HOVER_PROPERTY,
    payload: {
      property: {}
    },
  })).toEqual({
    hoverProperty: {},
  });
});

it(`Reducer should setReviewSending prop`, () => {
  expect(reducer({
    isReviewSending: false,
  }, {
    type: ActionType.SET_REVIEW_SENDING,
    payload: true,
  })).toEqual({
    isReviewSending: true,
  });
});

it(`Reducer should setResetForm prop`, () => {
  expect(reducer({
    isResetForm: false,
  }, {
    type: ActionType.SET_RESET_FORM,
    payload: true,
  })).toEqual({
    isResetForm: true,
  });
});

it(`Reducer should setReviews prop`, () => {
  expect(reducer({
    feedbacks: [],
  }, {
    type: ActionType.SET_REVIEWS,
    payload: reviews,
  })).toEqual({
    feedbacks: reviews,
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

  it(`Action creator for setReviewSending returns correct action`, () => {
    expect(ActionCreator.setReviewSending(offer)).toEqual({
      type: ActionType.SET_REVIEW_SENDING,
      payload: offer
    });
  });

  it(`Action creator for setReviewSending returns correct action`, () => {
    expect(ActionCreator.setResetForm(offer)).toEqual({
      type: ActionType.SET_RESET_FORM,
      payload: offer
    });
  });

  it(`Action creator for setReviewSending returns correct action`, () => {
    expect(ActionCreator.setReviews(offer)).toEqual({
      type: ActionType.SET_REVIEWS,
      payload: offer
    });
  });
});
