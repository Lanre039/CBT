const initialState = {
  name: "hello",
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HELLO":
      console.log(action.payload);
      return { ...state };
    default:
      console.log("reducer is working");
      return { state };
  }
};
