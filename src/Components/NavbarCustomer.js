import React from 'react';
import '../CSS/NavbarCustomer.css'
import { 
    BrowserRouter as Router, 
    Link 
  } from 'react-router-dom';
import {Button} from 'reactstrap'
import Proptypes from 'prop-types';
import {logoutCustomer} from '../Redux/Actions/logoutCustomerAction'
import {connect} from 'react-redux';

class NavbarCustomer extends React.Component{
    
    
static propTypes = {
    isAuthenticated : Proptypes.bool, 

    };


onChange=()=>{

this.props.logoutCustomer();
if(this.props.isAuthenticated == true){
    this.props.history.push('/customerlogin')
}
}


render(){
return(
<div className="navbar-main-div">
<div class="row">
  <div class="column" >
    {/* Links is Defined For Routing */}
  <div className="logo"><h4 className="heading-customer-navbar"><Link to="/">Trip Triggers</Link></h4></div>   
  
  </div>

  <div class="column" >
  <div class="wrap">
   <div class="search">
      <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>
  </div>
  <div class="column" >
  <div class="dropdown">
  <button class="dropbtn">Explore</button>
  <div class="dropdown-content">
 
  <a ><Link to="updatecustomerprofile">Edit Profile</Link></a>
  <Link><Button onClick={this.onChange} color="primary" style={{width:"100px"}}>Logout</Button></Link>
  </div>
</div>
  </div>
 
  </div>
  
</div>



)

}



}
const mapStateToProps=(state)=>({

  isAuthenticated: state.logoutCustomer.isAuthenticated
});
export default connect(mapStateToProps,{logoutCustomer}) (NavbarCustomer);