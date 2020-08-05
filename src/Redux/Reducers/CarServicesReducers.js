import { ADD_CAR_SERVICES_PACKAGE, DETAIL_CAR } from "../Actions/types";

const defaultState = {
  loadData: [],
  isAuthenticated: null,
  detail: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ADD_CAR_SERVICES_PACKAGE:
      return {
        ...state,
        loadData: action.payload,
        isAuthenticated: true,
      };

    case DETAIL_CAR:
      return {
        ...state,
        detail: action.payload,
        //    isAuthenticated: true,
      };
    default:
      return state;
  }
}
