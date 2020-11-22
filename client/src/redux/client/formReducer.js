const initialState = {
  formData: [],
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HELLO':
      console.log(action.payload);
      return { ...state };
    default:
      console.log('reducer is working');
      return { state };
  }
};
