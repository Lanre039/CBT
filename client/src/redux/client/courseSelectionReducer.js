import { types } from '../types';

const initialState = {
  selectedCourses: [],
};

export const courseSelectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COURSE:
      if (state.selectedCourses.length < 2) {
        return {
          ...state,
          selectedCourses: [...state.selectedCourses, action.payload],
        };
      } else {
        return { ...state };
      }
    case types.REMOVE_COURSE:
      return {
        ...state,
        selectedCourses: state.selectedCourses.filter(
          (course) => course !== action.payload
        ),
      };
    default:
      return { ...state };
  }
};
