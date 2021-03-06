import axios from "axios";
import { returnErrors } from "./errorAction";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  VENDOR_LOGIN_FAIL,
  VENDOR_LOGIN_SUCCESS,
  VENDOR_REGISTER_SUCCESS,
  VENDOR_LOGOUT_SUCCESS,
  VENDOR_REGISTER_FAIL,
} from "./types";

import path from "./config";
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

export const register = (form) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  // Request body

  // const body = JSON.stringify({
  //   vendorName: vendorName,
  //   email,
  //   contactNumber,
  //   password,
  //   username,
  //   city,
  //   gender,
  //   dob,
  //   cnic,
  //   officeAddress,
  //   description,
  //   businessType,
  //   feedback,
  //   fbLink,
  //   instaLink,
  //   websiteLink,
  //   avatar,
  // });

  axios
    .post(`${path}/vendor`, form, config)
    .then((res) =>
      dispatch({
        type: VENDOR_REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: VENDOR_REGISTER_FAIL,
      });
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
    .post(`${path}/vendor/login`, body, config)
    .then((res) =>
      dispatch({
        type: VENDOR_LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: VENDOR_LOGIN_FAIL,
      });
    });
};

// Logout user

export const logout = () => {
  return {
    type: VENDOR_LOGOUT_SUCCESS,
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
