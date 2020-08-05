import axios from "axios";
import { UPDATE_VENDOR_PROFILE } from "./types";
import path from "./config";

export const UpdateProfileVendor = (loadData) => (dispatch) => {
  const token = localStorage.getItem("token");
  console.log(loadData);
  console.log(token);
  const Header = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .patch(`${path}/vendor/me/update`, loadData, Header)
    .then((res) =>
      dispatch({
        type: UPDATE_VENDOR_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
