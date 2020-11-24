import { loginReducer, formReducer, rolesReducer } from './client';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  login: loginReducer,
  roles: rolesReducer,
  questions: formReducer,
});

export default reducer;
