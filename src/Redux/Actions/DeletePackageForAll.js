import axios from "axios";
import { DELETE_PACKAGE_VENDOR, DELETE_PACKAGE_CUSTOMER } from "./types";
import path from "../Actions/config";

export const DeletePackageCustomer = (dispatch) => {
  const tokenForVendor = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const header = {
    "Content-Type": "application/json",
    AuthenticationTokenForCustomer: `Bearer ${tokenForVendor}`,
  };
  axios
    .delete("https://triptriggers-dev.herokuapp.com/", header, id)
    .then((res) => {
      dispatch({
        type: DELETE_PACKAGE_CUSTOMER,
        payload: res.data,
      });
    });
};
