import axios from "axios";
import {
  UPDATE_MAIN_PACKAGE,
  UPDATE_CAR_PACKAGE,
  UPDATE_TOUR_PACKAGE,
  UPDATE_HOTEL_PACKAGE,
  FETCH_CAR,
  FETCH_HOTEL,
  FETCH_TOUR,
} from "./types";
import path from "../Actions/config";

export const MainPackage = (loadData, id) => (dispatch) => {
  const token = localStorage.getItem("token");
  // const id = localStorage.getItem("_id");
  console.log(loadData.packageName);
  console.log(id);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(loadData);

  axios.patch(`${path}/package/update/${id}`, loadData, config).then((res) => {
    dispatch({
      type: UPDATE_MAIN_PACKAGE,
      payload: res.data,
    });
  });
};

export const UpdateCarPackageForm = (loadData, id) => (dispatch) => {
  const token = localStorage.getItem("token");
  //   const id = localStorage.getItem("_id");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .patch(`${path}/package/rentalServices/update/${id}`, loadData, config)
    .then((res) => {
      dispatch({
        type: UPDATE_CAR_PACKAGE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const UpdateTourPackageForm = (loadData, id) => (dispatch) => {
  const token = localStorage.getItem("token");
  //  const id = localStorage.getItem("_id");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .patch(`${path}/package/tourService/update/${id}`, loadData, config)
    .then((res) => {
      dispatch({
        type: UPDATE_TOUR_PACKAGE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const UdpateHotelPackageForm = (loadData, id) => (dispatch) => {
  const token = localStorage.getItem("token");
  // const id = localStorage.getItem("_id");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  // Pass  hotel package id and vendor token in header
  axios
    .patch(`${path}/package/hotelServices/update/${id}`, loadData, config)
    .then((res) => {
      dispatch({
        type: UPDATE_HOTEL_PACKAGE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchCar = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  // const id = localStorage.getItem("_id");
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .get(`${path}/rentalpackage/${id}`, config)
    .then((res) => {
      dispatch({
        type: FETCH_CAR,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchHotel = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  // const id = localStorage.getItem("_id");
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .get(`${path}/hotelpackage/${id}`, config)
    .then((res) => {
      dispatch({
        type: FETCH_HOTEL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchTour = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  // const id = localStorage.getItem("_id");
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .get(`${path}/tourpackage/${id}`, config)
    .then((res) => {
      dispatch({
        type: FETCH_TOUR,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
