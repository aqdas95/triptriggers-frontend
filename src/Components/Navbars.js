import React from 'react';
import '../CSS/Navbar1.css';
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
  NavbarText,
  NavDropdown
} from 'react-bootstrap'

import { 
   Link 
} from 'react-router-dom';
class Navbars extends React.Component{

render(){
return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/"  style={{color:"white"}}>Trip Triggers</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/" style={{color:"white"}}>Login</Nav.Link>
      <Nav.Link  href="/vendorsignup"  style={{color:"white"}}>
        SignUp
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)


}

}

export default Navbars;