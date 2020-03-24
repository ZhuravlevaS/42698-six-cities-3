import {extend} from "../../utils.js";

const InitialState = {
  sortType: `popular`,
  hoverProperty: {}
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
};

const ActionType = {
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  SET_HOVER_PROPERTY: `SET_HOVER_PROPERTY`,
  CLEAN_HOVER_PROPERTY: `CLEAN_HOVER_PROPERTY`
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
    default:
      return InitialState;
  }
};

export {reducer, ActionType, ActionCreator};
