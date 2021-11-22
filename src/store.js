import { createStore } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import { combineReducers } from 'redux';

const reducers = combineReducers({
  currentUser: AuthReducer,
});

export default createStore(reducers);