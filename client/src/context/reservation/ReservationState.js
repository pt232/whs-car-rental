import { createContext, useReducer } from "react";
import {
  GET_BACK_RESERVATIONS,
  GET_RESERVATIONS,
  RESERVATION_ERROR,
  RESERVATION_UPDATE,
  SET_DRIVERS_FEE,
  SET_LOADING,
} from "../types";
import { reservationReducer } from "./reservationReducer";
import { get, patch } from "../../utils/rest";

export const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const initialState = {
    reservations: [],
    driversFee: false,
    updateTrigger: false,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(reservationReducer, initialState);

  const getReservations = async (token, role) => {
    dispatch({ type: SET_LOADING });

    try {
      let res;

      if (role === "customer") res = await get(`/api/v1/reservation/${token}`);
      else res = await get(`/api/v1/reservation/partner/${token}`);

      dispatch({
        type: GET_RESERVATIONS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: RESERVATION_ERROR,
        payload: error,
      });
    }
  };

  const getBackProtocolReservations = async (token) => {
    dispatch({ type: SET_LOADING });

    try {
      const res = await get(`/api/v1/reservation/partner/protocol/${token}`);

      dispatch({
        type: GET_BACK_RESERVATIONS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: RESERVATION_ERROR,
        payload: error,
      });
    }
  };

  const updateReservationStatus = async (id, newStatus, carId) => {
    dispatch({ type: SET_LOADING });

    try {
      await patch(`/api/v1/reservation/${id}`, { newStatus, carId });

      dispatch({
        type: RESERVATION_UPDATE,
      });
    } catch (error) {
      dispatch({
        type: RESERVATION_ERROR,
        payload: error,
      });
    }
  };

  const setDriversFee = (isIncluded) => {
    dispatch({
      type: SET_DRIVERS_FEE,
      payload: isIncluded,
    });
  };

  return (
    <ReservationContext.Provider
      value={{
        reservations: state.reservations,
        driversFee: state.driversFee,
        updateTrigger: state.updateTrigger,
        loading: state.loading,
        error: state.error,
        getReservations,
        getBackProtocolReservations,
        updateReservationStatus,
        setDriversFee,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
