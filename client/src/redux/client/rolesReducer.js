import { types } from "../types";

const initialState = {
  roles: [],
  currentLoggedInUserRoleId: null,
};

export const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ROLES:
      return { ...state, roles: action.payload };
    case types.SET_ROLE_ID:
      return { ...state, currentLoggedInUserRoleId: action.payload };
    default:
      return { ...state };
  }
};
