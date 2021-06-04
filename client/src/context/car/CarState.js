import { createContext, useReducer } from "react";
import { get } from "../../utils/rest";
import { CAR_ERROR, GET_CARS, SET_LOADING } from "../types";
import { carReducer } from "./carReducer";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const initialState = {
    cars: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(carReducer, initialState);

  const getCars = async () => {
    dispatch({ type: SET_LOADING });

    try {
      const res = await get("/api/v1/car");

      dispatch({
        type: GET_CARS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CAR_ERROR,
        payload: error,
      });
    }
  };

  return (
    <CarContext.Provider
      value={{
        cars: state.cars,
        loading: state.loading,
        error: state.error,
        getCars,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
