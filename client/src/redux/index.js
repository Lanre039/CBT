import { loginReducer, testReducer, formReducer } from './client';
const { combineReducers } = require('redux');

const reducer = combineReducers({
  test: testReducer,
  login: loginReducer,
  questions: formReducer,
});

export default reducer;
