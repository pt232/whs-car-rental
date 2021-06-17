import { createContext, useReducer } from "react";
import { ADD_ERROR_MESSAGE, REMOVE_ERROR_MESSAGE } from "../types";
import { messageReducer } from "./messageReducer";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const initialState = {
    errors: [],
  };

  const [state, dispatch] = useReducer(messageReducer, initialState);

  const addErrorMessage = (message) => {
    dispatch({
      type: ADD_ERROR_MESSAGE,
      payload: message,
    });
  };

  const removeErrorMessage = () => {
    dispatch({
      type: REMOVE_ERROR_MESSAGE,
    });
  };

  return (
    <MessageContext.Provider
      value={{
        errors: state.errors,
        addErrorMessage,
        removeErrorMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
