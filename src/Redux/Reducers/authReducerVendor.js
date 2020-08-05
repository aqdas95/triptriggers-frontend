import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  VENDOR_LOGIN_FAIL,
  VENDOR_LOGIN_SUCCESS,
  VENDOR_REGISTER_SUCCESS,
  VENDOR_LOGOUT_SUCCESS,
  VENDOR_REGISTER_FAIL,
} from "../Actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  loggedIN: null,
  type: null,
  vendorId: localStorage.getItem("id_vendor"),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case VENDOR_LOGIN_SUCCESS:
    case VENDOR_REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("id_vendor", action.payload.vendor._id);
      localStorage.setItem("vendorInfo", JSON.stringify(action.payload.vendor));
      return {
        ...state,
        ...action.payload,
        loggedIN: true,
        isAuthenticated: true,
        isLoading: false,
        type: action.payload.vendor.businessType,
        vendorId: action.payload.vendor._id,
      };
    case AUTH_ERROR:
    case VENDOR_LOGIN_FAIL:
    case VENDOR_LOGOUT_SUCCESS:
    case VENDOR_REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}

// const reducer = (state = 0, Action) => {
//   switch (Action.type) {
//     case "login":
//       return state;
//   }
// };

// export default reducer;
