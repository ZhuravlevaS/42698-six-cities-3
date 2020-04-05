import {extend} from "../../utils.js";
import User from "../../models/user.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const DEFAULT_USER = {
  id: -1,
  email: ``,
  name: ``,
  isPro: false,
  avatarUrl: ``
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: DEFAULT_USER
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER: `SET_USER`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user
  })
};

const onUserOperationSuccess = (response, dispatch) => {
  const user = User.parseUser(response.data);
  dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
  dispatch(ActionCreator.setUser(user));
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        onUserOperationSuccess(response, dispatch);
      })
      .catch((error) => {
        const {response} = error;

        if (response.status === 401) {
          dispatch((ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)));
        }
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then((response) => {
        onUserOperationSuccess(response, dispatch);
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_USER:
      return extend(state, {
        user: action.payload
      });
    default:
      return state;
  }
};

export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
