import { VENDOR_ADD_PKG } from "./types";
import axios from "axios";
import { tokenConfig } from "./authAction";
import { returnErrors } from "./errorAction";
import path from "./config";
export const addPackage = (item) => (dispatch, getState) => {
  const token = localStorage.getItem("token");
console.log(item);
  //console.log(data.token);
  //Headers
  const config = {
    headers: {
    
      "Content-Type": "multipart/form-data",
    
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .post(`${path}/package`, item, config)
    .then((res) =>
      dispatch({
        type: VENDOR_ADD_PKG,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
