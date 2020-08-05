import { ADD_HOTEL_SERVICES_PACKAGE } from "../Actions/types";

const defaultState = {
  loadData: [],
  isAuthenticated: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ADD_HOTEL_SERVICES_PACKAGE:
      return {
        ...state,
        loadData: action.payload,
        isAuthenticated: true,
      };

    default:
      return state;
  }
}
