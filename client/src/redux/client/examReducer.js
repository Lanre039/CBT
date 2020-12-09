import { types } from '../types';

const initialState = {
  courseId: '',
  courseTitle: '',
  questions: [],
  time: null,
};

export const examReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EXAM:
      return {
        ...state,
        courseId: action.payload.id,
        courseTitle: action.payload.title,
      };
    case types.SET_TIMER:
      return { ...state, time: action.payload };
    default:
      return { ...state };
  }
};
