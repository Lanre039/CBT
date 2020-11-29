import { types } from '../types';

const initialState = {
  answers: [],
  answeredQuestions: [],
};

export const answersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ANSWERED_QUESTION:
      return {
        ...state,
        answeredQuestions: [...state.answeredQuestions, action.payload],
      };
    case types.CHOOSE_ANSWER:
      if (state.answers.some((answer) => answer._id === action.payload._id)) {
        const newOptionsArray = state.answers.map((answer) => {
          if (answer._id === action.payload._id) {
            answer.options = action.payload.options;
          }

          return answer;
        });

        return {
          ...state,
          answers: [...newOptionsArray],
        };
      } else {
        return { ...state, answers: [...state.answers, action.payload] };
      }
    default:
      return { ...state };
  }
};
