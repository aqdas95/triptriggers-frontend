import React from "react";
import "../CSS/VendorDashboard.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import DashboardCardCar from '../Components/DashboardCardCar'
import NavbarVendor from "../Components/NavbarVendor";
class CarVendorDashboard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavbarVendor />
        </div>
        <div>
          <h3 className="special-styling-heading-tag">Vendor Dashboard</h3>
        </div>
        <div>
          {/* <h4 className="special-styling-heading-tag">
            Vendor Name: Car Services Provider
          </h4> */}
        </div>

        {/* <Link to="/tourvendordashboard">
          <Button color="primary" style={{ width: "10%", marginLeft: "10px" }}>
            Trips
          </Button>
        </Link>

        <Link to="carvendordashboard">
          <Button color="primary" style={{ width: "10%", marginLeft: "10px" }}>
            Car Services
          </Button>
        </Link> */}
{/* 
        <Link to="hotelvendordashboard">
          <Button color="primary" style={{ width: "10%", marginLeft: "10px" }}>
            Hotel Provider
          </Button>
        </Link> */}

        <div style={{ marginTop: "20px" }}>
          <DashboardCardCar />
        </div>
      </div>
    );
  }
}
export default CarVendorDashboard;
