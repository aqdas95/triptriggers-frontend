import React from "react";
import UpdateCustomerProfile from "../src/Components/UpdateCustomerProfile";
import LandingPage from "../src/Components/LandingPage";
import DescriptionPage from "../src/Components/DescriptionPage";
import VendorLogin from "./Components/VendorLogin";
import CustomerSignUp from "./Components/CustomerSignUp";
import PaymentForm from "../src/Components/PaymentForm";
import VendorDashboard from "./Components/VendorDashboard";
import AddPackage from "../src/Components/AddPackage";
import AddPackageCarServices from "../src/Components/AddPackageCarServices";
import AddPackageTourPlanner from "../src/Components/AddPackageTourPlanner";
import AddPackageHotelServices from "../src/Components/AddPackageHotelServices";
import DescriptionPageVendor from "../src/Components/DescriptionPageVendor";
import VendorSignUp from "../src/Components/VendorSignUp";
import UpdateMainPackage from "../src/Components/UpdateMainPackage";
import UpdateCarPackage from "../src/Components/UpdateCarPackage";
import UpdateTourPackage from "../src/Components/UpdateTourPackage";
import UpdateHotelPackage from "../src/Components/UpdateHotelPackage";
import CarVendorDashboard from "../src/Components/CarVendorDashboard";
import TourVendorDashboard from "../src/Components/TourVendorDashboard";
import HotelVendorDashboard from "../src/Components/HotelVendorDashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomerLogin from "../src/Components/CustomerLogin";
import CustomerDashboard from "../src/Components/CustomerDashboard";
import UpdateVendorProfile from "./Components/UpdateVendorProfile";
import CarForCustomer from "../src/Components/CarForCustomer";
import HotelForCustomer from "../src/Components/HotelForCustomer";
import TourForCustomer from "../src/Components/TourForCustomer";
import DescriptionPageCar from "../src/Components/DescriptionPageCar";
import DescriptionPageTour from "../src/Components/DescriptionPageTour";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/CustomerCar" component={CarForCustomer} />
          <Route exact path="/CustomerHotel" component={HotelForCustomer} />
          <Route exact path="/CustomerTour" component={TourForCustomer} />

          <Route
            exact
            path="/carvendordashboard"
            component={CarVendorDashboard}
          />
          <Route
            exact
            path="/tourvendordashboard"
            component={TourVendorDashboard}
          />
          <Route
            exact
            path="/hotelvendordashboard"
            component={HotelVendorDashboard}
          />
          <Route
            exact
            path="/updatecarpackage/:id"
            component={UpdateCarPackage}
          />
          <Route
            exact
            path="/updatetourpackage/:id"
            component={UpdateTourPackage}
          />
          <Route
            exact
            path="/updatehotelpackage/:id"
            component={UpdateHotelPackage}
          />
          <Route
            exact
            path="/updatepackage/:id/:type"
            component={UpdateMainPackage}
          />
          <Route
            exact
            path="/addpackagehotelservices"
            component={AddPackageHotelServices}
          />
          <Route
            exact
            path="/addpackagetourservices"
            component={AddPackageTourPlanner}
          />
          <Route
            exact
            path="/addpackagecarservices"
            component={AddPackageCarServices}
          />
          <Route exact path="/vendorsignup" component={VendorSignUp} />
          <Route
            exact
            path="/customerdashboard"
            component={CustomerDashboard}
          />
          <Route exact path="/vendordashboard" component={VendorDashboard} />
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Route exact path="/" component={VendorLogin} />
          <Route exact path="/customerlogin" component={CustomerLogin} />
          <Route
            exact
            path="descriptionpage/:id/:price/:description/:packageName/:imageLink"
            component={DescriptionPage}
          />
          <Route
            exact
            path="/descriptionpagecar/:id/:price/:description/:packageName/:imageLink"
            component={DescriptionPageCar}
          />
          <Route
            exact
            path="/descriptionpagetour/:id/:price/:description/:packageName/:imageLink"
            component={DescriptionPageTour}
          />
          <Route exact path="/customersignup" component={CustomerSignUp} />
          <Route exact path="/payment" component={PaymentForm} />
          <Route exact path="/addpackage" component={AddPackage} />
          <Route
            exact
            path="/vendordescriptionpage/:id/:price/:description/:packageName/:imageLink"
            component={DescriptionPageVendor}
          />
          <Route
            exact
            path="/updatecustomerprofile"
            component={UpdateCustomerProfile}
          />
          <Route
            exact
            path="/updatevendorprofile"
            component={UpdateVendorProfile}
          />
        </Router>
      </div>
    );
  }
}

export default App;
