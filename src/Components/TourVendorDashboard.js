import React from "react";
import "../CSS/VendorDashboard.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import DashboardCard from "./DashboardCard";
import NavbarVendor from "../Components/NavbarVendor";
import { connect } from "react-redux";
class TourVendorDashboard extends React.Component {
  render() {
    return (
      <div>
      
        <div>
          <NavbarVendor />
        </div>
        <div>
          <h3 className="special-styling-heading-tag">Vendor Dashboard</h3>
        </div>
        {/* <div><img style={{ height:"220px",width:"220px"}} src={ ` http://localhost:5000/${item.images[0].imagelink}`} /></div> */}
        <div>
          {/* <h4 className="special-styling-heading-tag" style={{}}>
            Vendor Name: Tour Services Provider
          </h4> */}
        </div>

       

        <div style={{ marginTop: "20px" }}>
          <DashboardCard />
        </div>
      
      </div>
       
    );
  }
}
// const mapStateToProps=(state)=>({

// authVendorReducer : state.authVendorReducer
// })
export default ( TourVendorDashboard);
