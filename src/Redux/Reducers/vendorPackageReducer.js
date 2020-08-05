import { VENDOR_ADD_PKG } from "../Actions/types.js";
const initialState = {
  items: [],
  loading: false,
  _id: localStorage.getItem("id"),
  isAuthenticated: false,
  type: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case VENDOR_ADD_PKG:
      localStorage.setItem("_id", action.payload._id);
      return {
        ...state,
        isAuthenticated: true,
        // items: [action.payload, ...state.items],
        items: action.payload,

        type: action.payload.type,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}
