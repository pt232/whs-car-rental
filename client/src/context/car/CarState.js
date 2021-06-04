import { createContext, useReducer } from "react";
import { get } from "../../utils/rest";
import { CAR_ERROR, GET_CARS } from "../types";
import { carReducer } from "./carReducer";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const initialState = {
    cars: [],
    error: null,
  };

  const [state, dispatch] = useReducer(carReducer, initialState);

  const getCars = async () => {
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
    <CarContext.Provider value={{ cars: state.cars, getCars }}>
      {children}
    </CarContext.Provider>
  );
};
