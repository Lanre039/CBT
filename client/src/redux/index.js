import { loginReducer, rolesReducer } from "./client";
const { combineReducers } = require("redux");

const reducer = combineReducers({
  roles: rolesReducer,
  login: loginReducer,
});

export default reducer;
