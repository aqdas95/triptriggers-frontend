import axios from "axios";

import { ADD_HOTEL_SERVICES_PACKAGE } from "./types";
import path from "../Actions/config";

export const AddHotelPackage = (loadData) => (dispatch) => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("_id");
  console.log(loadData);
  console.log(id);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .post(`${path}/package/hotelServices/${id}`, loadData, config)
    .then((res) =>
      dispatch({
        type: ADD_HOTEL_SERVICES_PACKAGE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
