import {
  UPDATE_MAIN_PACKAGE,
  UPDATE_CAR_PACKAGE,
  UPDATE_TOUR_PACKAGE,
  UPDATE_HOTEL_PACKAGE,
  FETCH_TOUR,
  FETCH_HOTEL,
  FETCH_CAR,
} from "../Actions/types";

const defaultState = {
  loadData: [],
  isAuthenticated: null,
  isAuthenticatedCar: null,
  isAuthenticatedTour: null,
  isAuthenticatedHotel: null,

  car: [],
  hotel: [],
  tour: [],
  vehicleRegNo: "",
  driverName: "",
  driverContact: "",
  vehicleType: "",
  vehicleName: "",

  managerName: "",
  managerContact: "",
  roomType: "",
  roomQuality: "",

  guiderName: "",
  guiderContact: "",
  startDate: "",
  endDate: "",
  food: "",
  accomodation: "",
  traveling: "",

  packageName: "",
  description: "",
  price: "",

  location: "",
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case UPDATE_MAIN_PACKAGE:
      return {
        ...state,
        loadData: action.payload,
        isAuthenticated: true,
      };
    case UPDATE_CAR_PACKAGE:
      return {
        ...state,
        loadData: action.payload,
        isAuthenticatedCar: true,
      };
    case UPDATE_TOUR_PACKAGE:
      return {
        ...state,
        loadData: action.payload,
        isAuthenticatedTour: true,
      };
    case UPDATE_HOTEL_PACKAGE:
      return {
        ...state,
        loadData: action.payload,
        isAuthenticatedHotel: true,
      };

    case FETCH_CAR:
      return {
        ...state,
        car: [action.payload],
        vehicleRegNo: action.payload.vehicleRegNo,
        driverName: action.payload.driverName,
        driverContact: action.payload.driverContact,
        vehicleType: action.payload.vehicleType,
        vehicleName: action.payload.vehicleName,
        loading: false,
      };

    case FETCH_HOTEL:
      return {
        ...state,
        hotel: [action.payload],
        managerName: action.payload.managerName,
        managerContact: action.payload.managerContact,
        roomType: action.payload.roomType,
        roomQuality: action.payload.roomQuality,
        loading: false,
      };

    case FETCH_TOUR:
      return {
        ...state,
        tour: [action.payload],
        guiderName: action.payload.guiderName,
        guiderContact: action.payload.guiderContact,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        food: action.payload.food,
        accomodation: action.payload.accomodation,
        traveling: action.payload.traveling,
        loading: false,
      };

    default:
      return state;
  }
}
