import { testReducer } from "./client";
const { combineReducers } = require("redux");

const reducer = combineReducers({
  test: testReducer
});

export default reducer
