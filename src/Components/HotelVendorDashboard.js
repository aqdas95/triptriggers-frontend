import React from "react";
import "../CSS/VendorDashboard.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import DashboardCardHotel from '../Components/DashboardCardHotel'
import NavbarVendor from "../Components/NavbarVendor";
class HotelVendorDashboard extends React.Component {
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
            Vendor Name: Hotel Services Provider
          </h4> */}
        </div>

       
{/* 
        <Link to="hotelvendordashboard">
          <Button color="primary" style={{ width: "10%", marginLeft: "10px" }}>
            Hotel Provider
          </Button>
        </Link> */}

        <div style={{ marginTop: "20px" }}>
          <DashboardCardHotel />
        </div>
      </div>
    );
  }
}
export default HotelVendorDashboard;
