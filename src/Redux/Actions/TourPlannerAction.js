import axios from "axios";
import { ADD_TOUR_SERVICES_PACKAGE } from "./types";
import path from "../Actions/config";

export const tourplannerservices = (loadData) => (dispatch) => {
  const Token = localStorage.getItem("token");
  const id = localStorage.getItem("_id");

  //vendors jwt token
  console.log(Token);
  //main package id
  console.log(id);
  console.log(loadData);
  const config = {
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${Token}`,
    },
  };

  // /package/tourService/
  axios
    .post(`${path}/package/tourService/${id}`, loadData, config)
    .then((res) =>
      dispatch({
        type: ADD_TOUR_SERVICES_PACKAGE,
        payload: res.data,
      })
    );
};
