import {
  FETCH_PACKAGE,
  ITEMS_LOADING,
  DELETE_PACKAGE_VENDOR,
  FETCH_PACKAGE_TOUR,
  FETCH_PACKAGE_HOTEL,
  DELETE_PACKAGE_VENDOR_TOUR,
  DELETE_PACKAGE_VENDOR_HOTEL,
} from "../Actions/types";

const defaultState = {
  Packages: [],
  PackagesHotel: [],
  PackagesTour: [],

  loading: false,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_PACKAGE:
      return {
        ...state,
        Packages: action.payload,
        loading: false,
      };

    case FETCH_PACKAGE_HOTEL:
      return {
        ...state,
        PackagesHotel: action.payload,
        loading: false,
      };

    case FETCH_PACKAGE_TOUR:
      return {
        ...state,
        PackagesTour: action.payload,
        loading: false,
      };

    case DELETE_PACKAGE_VENDOR:
      return {
        ...state,
        Packages: state.Packages.filter((item) => item._id !== action.payload),
      };

    case DELETE_PACKAGE_VENDOR_HOTEL:
      return {
        ...state,
        PackagesHotel: state.PackagesHotel.filter(
          (item) => item._id !== action.payload
        ),
      };

    case DELETE_PACKAGE_VENDOR_TOUR:
      return {
        ...state,
        PackagesTour: state.PackagesTour.filter(
          (item) => item._id !== action.payload
        ),
      };

    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
