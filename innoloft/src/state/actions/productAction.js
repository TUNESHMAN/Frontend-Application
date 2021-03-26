import {
  GET_PRODUCT,
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_FAIL,
  GET_TRL,
  FETCH_TRL_START,
  FETCH_TRL_FAIL,
  GET_APP_CONFIGURATION,
  FETCH_APP_CONFIGURATION_START,
  FETCH_APP_CONFIGURATION_FAIL,
  SET_ACTIVE_TAB,
} from "../types/types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const getProduct = () => (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_START });
  axiosWithAuth()
    .get(`/product/6781/`)
    .then((res) => {
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_PRODUCT_FAIL,
        payload: err.response,
      });
    });
};

export const getTrl = () => (dispatch) => {
  dispatch({ type: FETCH_TRL_START });
  axiosWithAuth()
    .get(`/trl/`)
    .then((res) => {
      dispatch({
        type: GET_TRL,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_TRL_FAIL,
        payload: err.response,
      });
    });
};

export const getAppConfiguration = () => (dispatch) => {
  const configurationId = process.env.APP_ID || 1;
  dispatch({ type: FETCH_APP_CONFIGURATION_START });
  axiosWithAuth()
    .get(`https://api-test.innoloft.com/configuration/${configurationId}/`)
    .then((res) => {
      dispatch({
        type: GET_APP_CONFIGURATION,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_APP_CONFIGURATION_FAIL,
        payload: err.response,
      });
    });
};
export const setActiveTab = (payload) => {
  return {
    type: SET_ACTIVE_TAB,
    payload,
  };
};
