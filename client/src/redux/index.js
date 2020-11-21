import { loginReducer, testReducer } from "./client";
const { combineReducers } = require("redux");

const reducer = combineReducers({
  test: testReducer,
  login: loginReducer
});

export default reducer
