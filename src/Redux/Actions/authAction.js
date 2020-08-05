import axios from "axios";
import { returnErrors } from "./errorAction";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";
import path from '../Actions/config'
// CHECK TOKEN & LOAD USER

export const loadUser = () => (dispatch, getState) => {
  // User loading

  dispatch({
    type: USER_LOADING,
  });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// Register user

export const register = ({
  avatar,
  customerName,
  email,
  contactNumber,
  password,
  cnic,
  gender,
  dob,
  city,
}) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body

  const body = JSON.stringify({
    avatar,
    customerName,
    email,
    contactNumber,
    password,
    cnic,
    gender,
    dob,
    city,
  });

  axios
    .post(`${path}/customer`, body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => { console.log(err)
      // dispatch(
      //   returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      // );
      // dispatch({
      //   type: REGISTER_FAIL,
      // });
    });
};

// Login User

export const login = ({ email, password }) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body

  const body = JSON.stringify({ email, password });

  axios
    .post(`${path}/customer/login`, body, config)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {console.log(err)
      // dispatch(
      //   returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      // );
      // dispatch({
      //   type: LOGIN_FAIL,
      // });
    });
};

// Logout user

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

// SETUP config/headers and token

export const tokenConfig = (getState) => {
  //GET token from localstorage
  // GET TOKEN FROM LOCAL STORAGE
  const token = getState().auth.token;

  //Headers

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  //if TOKEN, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
