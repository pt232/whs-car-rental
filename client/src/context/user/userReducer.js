import { ADD_CREDENTIALS, REMOVE_CREDENTIALS } from "../types";

export const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_CREDENTIALS:
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role,
      };
    case REMOVE_CREDENTIALS:
      return {
        ...state,
        token: null,
        role: null,
      };
    default:
      return state;
  }
};
