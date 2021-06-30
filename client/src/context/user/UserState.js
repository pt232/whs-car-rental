import { createContext, useReducer } from "react";
import { ADD_CREDENTIALS, REMOVE_CREDENTIALS } from "../types";
import { userReducer } from "./userReducer";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const addCredentials = (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    dispatch({
      type: ADD_CREDENTIALS,
      payload: { token, role },
    });
  };

  const removeCredentials = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    dispatch({ type: REMOVE_CREDENTIALS });
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        role: state.role,
        addCredentials,
        removeCredentials,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
