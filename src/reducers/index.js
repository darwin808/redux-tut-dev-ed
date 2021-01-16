import counterReducer from "./Counter";
import IsloggedReducaer from "./IsloggedReducer";
import { combineReducers } from "redux";

const allreducers = combineReducers({
  counter: counterReducer,
  islogged: IsloggedReducaer,
});

export default allreducers;
