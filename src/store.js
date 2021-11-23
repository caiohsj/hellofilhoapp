import { createStore } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import StudentReducer from "./reducers/StudentReducer";
import { combineReducers } from 'redux';

const reducers = combineReducers({
  auth: AuthReducer,
  students: StudentReducer,
});

export default createStore(reducers);