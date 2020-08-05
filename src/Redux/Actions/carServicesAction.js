import { ADD_CAR_SERVICES_PACKAGE, DETAIL_CAR } from "./types";

import axios from "axios";
import path from "../Actions/config";

export const addPackageCarServices = (form) => (dispatch) => {
  const CarServicesToken = localStorage.getItem("token");
  const id = localStorage.getItem("_id");
  console.log(id);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CarServicesToken}`,
    },
  };

  axios
    .post(`${path}/package/rentalServices/${id}`, form, config)
    .then((res) =>
      dispatch({
        type: ADD_CAR_SERVICES_PACKAGE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const detailCarServices = (id) => (dispatch) => {
  const CarServicesToken = localStorage.getItem("token");
  const id = localStorage.getItem("_id");
  console.log(id);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CarServicesToken}`,
    },
  };

  axios
    .get(`${path}/rentalpackage/${id}`, config)
    .then((res) =>
      dispatch({
        type: DETAIL_CAR,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
