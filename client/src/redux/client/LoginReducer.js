const { types } = require('../types');

const initialState = {
  username: '',
  password: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      const { name, value } = action.payload;
      if (name === 'username') {
        if (value === '') return { ...state, [name]: value  };
        if (!/^[0-9a-zA-Z]+$/.test(value) || value === '') {
          return { ...state };
        }
      }
      return { ...state, [name]: value };
    default:
      return { ...state };
  }
};
