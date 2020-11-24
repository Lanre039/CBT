import { types } from "../types";

const initialState = {
  roles: [],
  currentLoggedInUserRoleId: null,
};

export const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ROLES:
      // local
      return { ...state, roles: action.payload };
    case types.SET_ROLE_ID:
      console.log(action.payload);
      return { ...state, currentLoggedInUserRoleId: action.payload };
    default:
      return { ...state };
  }
};
