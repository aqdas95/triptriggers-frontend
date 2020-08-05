import React from "react";
import "../CSS/NavbarVendor1.css";
import { logoutVendor } from "../Redux/Actions/logoutVendorAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'react-bootstrap'

class NavbarVendor extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  onChange = () => {
    this.props.logoutVendor();
    if (this.props.token === "") {
      this.props.history.push("/vendorlogin");
    }
  };

  componentDidUpdate() {
    if (this.props.token === "") {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/"  style={{color:"white"}}>Trip Triggers</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
        <Nav.Link  href ='/addpackage' style={{color:"white"}}>Add Package</Nav.Link>
        <Nav.Link   href ='/updatevendorprofile' style={{color:"white"}}>
          Edit Profile
          </Nav.Link>
        <Nav.Link href ='/' style={{color:"white"}} onChange={this.onChange}>Logout</Nav.Link>
          
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.logoutVendor.isAuthenticated,
  token: state.logoutVendor.token,
});
export default connect(mapStateToProps, { logoutVendor })(
  withRouter(NavbarVendor)
);
