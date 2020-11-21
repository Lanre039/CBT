const { types } = require("../types");

const initialState = {
  username: "",
  password: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return { ...state };
  }
};
