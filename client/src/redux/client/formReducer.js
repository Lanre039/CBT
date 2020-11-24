import { types } from '../types';

const changeQuestion = (questions, data) => {
  const otherQuestions = questions.filter(
    (question) => question.id !== data.id
  );
  return [...otherQuestions, data];
};

const initialState = {
  formData: [],
};

export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SAVE_QUESTION:
      console.log(types.SAVE_QUESTION);
      return { ...state, formData: [...state.formData, payload] };
    case types.CHANGE_QUESTION:
      console.log(types.CHANGE_QUESTION);
      return {
        ...state,
        formData: changeQuestion(state.formData, payload),
      };
    default:
      return state;
  }
};
