import {extend} from "../../utils.js";
import Comment from "../../models/comment.js";

const InitialState = {
  sortType: `popular`,
  hoverProperty: {},
  isReviewSending: false,
  isResetForm: false,
  feedbacks: []
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
  setReviews: (data)=> ({
    type: ActionType.SET_REVIEWS,
    payload: data
  })
};

const Operation = {
  sendReview: (data, id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setReviewSending(true));

    return api.post(`/comments/${id}`, {
      comment: data.comment,
      rating: data.rating,
    })
      .then((response) => {
        dispatch(ActionCreator.setReviewSending(false));
        dispatch(ActionCreator.setResetForm(true));

        const comments = Comment.parseComments(response.data);
        dispatch(ActionCreator.setReviews(comments));
      });
  },
  getReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        console.log(response)
        const comments = Comment.parseComments(response.data);
        dispatch(ActionCreator.setReviews(comments));
      });
  },
};

const ActionType = {
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  SET_HOVER_PROPERTY: `SET_HOVER_PROPERTY`,
  CLEAN_HOVER_PROPERTY: `CLEAN_HOVER_PROPERTY`,
  SET_REVIEW_SENDING: `SET_REVIEW_SENDING`,
  SET_RESET_FORM: `SET_RESET_FORM`,
  SET_REVIEWS: `SET_REVIEWS`
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
    case ActionType.SET_REVIEWS:
      return extend(state, {
        feedbacks: action.payload
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Operation};
