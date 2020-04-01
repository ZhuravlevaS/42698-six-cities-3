import {extend} from "../../utils.js";

const InitialState = {
  sortType: `popular`,
  hoverProperty: {},
  isReviewSending: false,
  isResetForm: false
};

const ActionCreator = {
  setSortType: (sortType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: {
      sortType
    }
  }),
  setHoverProperty: (property) => ({
    type: ActionType.SET_HOVER_PROPERTY,
    payload: {
      property
    }
  }),
  cleanHoverProperty: () => ({
    type: ActionType.CLEAN_HOVER_PROPERTY,
    payload: {
      property: {}
    }
  }),
  setReviewSending: (bool) => ({
    type: ActionType.SET_REVIEW_SENDING,
    payload: bool
  }),
  setResetForm: (bool) => ({
    type: ActionType.SET_RESET_FORM,
    payload: bool
  }),
};

const onReviwOperationSuccess = (dispatch) => {
  dispatch(ActionCreator.setReviewSending(false));
  dispatch(ActionCreator.setResetForm(true));
};

const Operation = {
  sendReview: (data, id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setReviewSending(true));

    return api.post(`/comments/${id}`, {
      comment: data.comment,
      rating: data.rating,
    })
      .then(() => {
        onReviwOperationSuccess(dispatch);
      });
  },
};

const ActionType = {
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  SET_HOVER_PROPERTY: `SET_HOVER_PROPERTY`,
  CLEAN_HOVER_PROPERTY: `CLEAN_HOVER_PROPERTY`,
  SET_REVIEW_SENDING: `SET_REVIEW_SENDING`,
  SET_RESET_FORM: `SET_RESET_FORM`
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.SET_SORT_TYPE:
      return extend(state, {
        sortType: action.payload.sortType
      });
    case ActionType.SET_HOVER_PROPERTY:
      return extend(state, {
        hoverProperty: action.payload.property
      });
    case ActionType.CLEAN_HOVER_PROPERTY:
      return extend(state, {
        hoverProperty: action.payload.property
      });
    case ActionType.SET_REVIEW_SENDING:
      return extend(state, {
        isReviewSending: action.payload
      });
    case ActionType.SET_RESET_FORM:
      return extend(state, {
        isResetForm: action.payload
      });
    default:
      return InitialState;
  }
};

export {reducer, ActionType, ActionCreator, Operation};
