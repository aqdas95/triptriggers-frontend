import axios from "axios";
import {
  FETCH_PACKAGE,
  ITEMS_LOADING,
  DELETE_PACKAGE_VENDOR,
  FETCH_PACKAGE_TOUR,
  FETCH_PACKAGE_HOTEL,
  DELETE_PACKAGE_VENDOR_HOTEL,
  DELETE_PACKAGE_VENDOR_TOUR,
} from "./types";
import path from "./config";

export const DeletePackageVendor = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  //  const id = localStorage.getItem("id");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  // package id pass here
  axios.delete(`${path}/package/delete/${id}`, config).then((res) => {
    dispatch({
      type: DELETE_PACKAGE_VENDOR,
      payload: id,
    });
  });
};

export const DeletePackageVendorHotel = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  //  const id = localStorage.getItem("id");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  // package id pass here
  axios.delete(`${path}/package/delete/${id}`, config).then((res) => {
    dispatch({
      type: DELETE_PACKAGE_VENDOR_HOTEL,
      payload: id,
    });
  });
};

export const DeletePackageVendorTour = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  //  const id = localStorage.getItem("id");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  // package id pass here
  axios.delete(`${path}/package/delete/${id}`, config).then((res) => {
    dispatch({
      type: DELETE_PACKAGE_VENDOR_TOUR,
      payload: id,
    });
  });
};

export const fetchPackage = () => (dispatch) => {
  const tokenForFetchPackage = localStorage.getItem("token");
  console.log(tokenForFetchPackage);
  dispatch(setItemsLoading());
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenForFetchPackage}`,
    },
  };
  axios
    .get(`${path}/rentalpackages`, config)
    .then((res) =>
      dispatch({
        type: FETCH_PACKAGE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};

export const fetchPackageTour = () => (dispatch) => {
  const tokenForFetchPackage = localStorage.getItem("token");
  console.log(tokenForFetchPackage);
  dispatch(setItemsLoading());
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenForFetchPackage}`,
    },
  };
  axios
    .get(`${path}/tourpackages`, config)
    .then((res) =>
      dispatch({
        type: FETCH_PACKAGE_TOUR,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const fetchPackageHotel = () => (dispatch) => {
  const tokenForFetchPackage = localStorage.getItem("token");
  console.log(tokenForFetchPackage);
  dispatch(setItemsLoading());
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenForFetchPackage}`,
    },
  };
  axios
    .get(`${path}/hotelpackages`, config)
    .then((res) =>
      dispatch({
        type: FETCH_PACKAGE_HOTEL,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
