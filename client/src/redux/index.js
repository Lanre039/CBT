import {
  loginReducer,
  formReducer,
  rolesReducer,
  courseSelectionReducer,
  answersReducer,
  tokenReducer,
  questionsReducer,
} from './client';
import { combineReducers } from 'redux';
import { examReducer } from './client/examReducer';

const reducer = combineReducers({
  login: loginReducer,
  roles: rolesReducer,
  questions: formReducer,
  courseSelection: courseSelectionReducer,
  exam: examReducer,
  answers: answersReducer,
  tokens: tokenReducer,
  examQuestions: questionsReducer,
});

export default reducer;
