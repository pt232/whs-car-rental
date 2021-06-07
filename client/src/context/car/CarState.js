import { createContext, useReducer } from "react";
import { get } from "../../utils/rest";
import { CAR_ERROR, GET_CAR, GET_CARS, SET_LOADING } from "../types";
import { carReducer } from "./carReducer";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const initialState = {
    cars: [],
    currentCar: {},
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

  const getCar = async (id) => {
    dispatch({ type: SET_LOADING });

    try {
      const res = await get(`/api/v1/car/${id}`);

      dispatch({
        type: GET_CAR,
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
        currentCar: state.currentCar,
        loading: state.loading,
        error: state.error,
        getCars,
        getCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
