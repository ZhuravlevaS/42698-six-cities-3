import NameSpace from "./name-space";
import {combineReducers} from "redux";
import {reducer as user} from "./user/user.js";
import {reducer as data} from "./data/data.js";
import {reducer as state} from "./state/state.js";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.STATE]: state,
});
