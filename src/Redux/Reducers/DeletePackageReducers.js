import {
  DELETE_PACKAGE_VENDOR,
  DELETE_PACKAGE_CUSTOMER,
} from "../Actions/types";

const defaultState = {
  isAuthenticated: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case DELETE_PACKAGE_CUSTOMER:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
  }
}
