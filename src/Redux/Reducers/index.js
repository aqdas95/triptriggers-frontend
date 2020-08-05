import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import authReducerVendor from "./authReducerVendor";
import errReducerVendor from "./errReducerVendor";
import vendorPackageReducer from "./vendorPackageReducer";
import CarServicesReducers from '../Reducers/CarServicesReducers';
import HotelPackageReducers from '../Reducers/HotelPackageReducers';
import TourServicesReducers from '../Reducers/TourServicesReducers';
import logoutCustomerReducers from '../Reducers/logoutCustomerReducers';
import UpdateCustomerReducer from '../Reducers/UpdateCustomerReducer';
import UpdateVendorProfileReducers from '../Reducers/UpdateVendorProfileReducers';
import logoutVendorReducer from '../Reducers/logoutVendorReducer';
import fetchPackageReducer from '../Reducers/fetchPackageReducer';
import feedbackReducers from '../Reducers/feedbackReducers'
import UpdatePackageReduers from '../Reducers/UdpatePackageReducers'

export default combineReducers({
  error: errorReducer,
  auth: authReducer,

  
  authReducerVendor: authReducerVendor,
  errReducerVendor: errReducerVendor,
  vendorPackageReducer: vendorPackageReducer,
  // Passing the car service reducer below
  carReducer: CarServicesReducers,
  // Passing the tour planner reducer here 
tourplannerReducer: TourServicesReducers,

// Passing the hotel services reducer here
hotelServices : HotelPackageReducers,

// Logout Customer Reducer Here
logoutCustomer: logoutCustomerReducers, 

// Update Customer Reducer
updateCustomer: UpdateCustomerReducer,

// Udpate Vendor Profile
updateVendor : UpdateVendorProfileReducers,

// Logout Vendor

logoutVendor: logoutVendorReducer,

// Fetch Package Reducer
fetchPackageForPrint: fetchPackageReducer, 

// Feedback Reducers Pass Here 
feedbackOfCustomer : feedbackReducers,

// Update Package Reducers Pass Here

Update : UpdatePackageReduers,

});
