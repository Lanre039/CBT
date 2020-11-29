import { types } from '../types';

const initialState = {
  courseId: '',
  questions: []
};

export const examReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EXAM:
      return { ...state, courseId: action.payload };
    case "SET_QUESTIOMS":
      return {...state, questions: action.payload}
    default:
      return { ...state };
  }
};
