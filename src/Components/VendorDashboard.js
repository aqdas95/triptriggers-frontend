import React from "react";
import "../CSS/VendorDashboard.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import DashboardCard from "./DashboardCard";
import NavbarVendor from "../Components/NavbarVendor";
import TourVendorDashboard from "../Components/TourVendorDashboard";
class VendorDashboard extends React.Component {
  render() {
    return (
      <div>
        <NavbarVendor />
        <div>
          <h3 className="special-styling-heading-tag">Vendor Dashboard</h3>
        </div>
        <div>
          <h4 className="special-styling-heading-tag">
            Vendor Name: Tour Planner
          </h4>
        </div>
<DashboardCard />
        {/* <Link to="/tourvendordashboard">
          <Button color="primary" style={{ width: "10%", marginLeft: "10px" }}>
            Trips
          </Button>
        </Link>

        <Link to="carvendordashboard">
          <Button color="primary" style={{ width: "10%", marginLeft: "10px" }}>
            Car Services
          </Button>
        </Link>

        <Link to="hotelvendordashboard">
          <Button color="primary" style={{ width: "10%", marginLeft: "10px" }}>
            Hotel Provider
          </Button>
        </Link> */}
      </div>
    );
  }
}
export default VendorDashboard;
