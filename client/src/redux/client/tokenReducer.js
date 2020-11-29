import { types } from '../types';

const initialState = {
  token: {},
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      const { token, type } = action.payload;
      sessionStorage.setItem(type, token);
      return { ...state, token: { type, token } };
    default:
      return { ...state };
  }
};
