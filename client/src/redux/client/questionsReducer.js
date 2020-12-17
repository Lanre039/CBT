import { types } from '../types';

const initialState = {
  currentIndex: 0,
  questions: [],
};

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_QUESTIONS:
      return { ...state, questions: action.payload };
    case types.NEXT_QUESTION:
      if (state.currentIndex < state.questions.length - 1) {
        return { ...state, currentIndex: state.currentIndex + 1 };
      } else {
        return { ...state };
      }
    case types.PREVIOUS_QUESTION:
      if (state.currentIndex >= 0) {
        return { ...state, currentIndex: state.currentIndex - 1 };
      } else {
        return { ...state };
      }
    case types.SKIP_TO_QUESTION:
      return { ...state, currentIndex: action.payload };
    default:
      return { ...state };
  }
};
