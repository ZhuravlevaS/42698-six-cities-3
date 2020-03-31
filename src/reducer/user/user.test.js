import {reducer, ActionCreator, ActionType, AuthorizationStatus} from "./user";

const user = {
  id: 655664,
  email: `jjjdd@dkljf.tu`,
  name: `5465466`,
  isPro: false,
  avatarUrl: ``
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: {
      id: -1,
      email: ``,
      name: ``,
      isPro: false,
      avatarUrl: ``
    }
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });
});

it(`Reducer should change User by a given value`, () => {
  expect(reducer({
    user: {
      id: -1,
      email: ``,
      name: ``,
      isPro: false,
      avatarUrl: ``
    },
  }, {
    type: ActionType.SET_USER,
    payload: {
      id: 655664,
      email: `jjjdd@dkljf.tu`,
      name: `5465466`,
      isPro: false,
      avatarUrl: ``
    },
  })).toEqual({
    user: {
      id: 655664,
      email: `jjjdd@dkljf.tu`,
      name: `5465466`,
      isPro: false,
      avatarUrl: ``
    }
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`Action creator for set user returns correct action`, () => {
    expect(ActionCreator.setUser(user)).toEqual({
      type: ActionType.SET_USER,
      payload: user,
    });
  });
});
