import { UPDATE_VENDOR_PROFILE } from "../Actions/types";

const defaultState = {
  isAuthenticated: false,
  data: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case UPDATE_VENDOR_PROFILE:
      console.log(action.payload);
      console.log(state);
      localStorage.setItem("vendorInfo", JSON.stringify(action.payload));
      return {
        ...state,
        data: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}
