import React from 'react'
import '../CSS/CustomerDashboard.css'
import {Button} from 'reactstrap'
import NavbarCustomer from '../Components/NavbarCustomer'
import{Link} from 'react-router-dom'

class CustomerDashboard extends React.Component{

render(){
return(
<div>
  <div><NavbarCustomer /></div>
  <div><h3 className="special-styling-heading-tag">Customer Dashboard</h3></div>
  {/* <div style={{border:"1px solid black", width: "18%", height: "180px"}}></div> */}
  <div  ><h4 className="special-styling-heading-tag">Customer Name: Hamza</h4></div>

<Link to="CustomerTour"><Button color="primary" style={{ width: "10%", marginLeft:"10px" }}>Trips</Button></Link>

<Link to="CustomerCar"><Button color="primary" style={{ width: "10%", marginLeft:"10px" }}>Car Services</Button></Link>

<Link to="CustomerHotel"><Button color="primary" style={{ width: "10%", marginLeft:"10px" }}>Hotel Provider</Button></Link>

 

  
 
 

</div>


)


}

}
export default CustomerDashboard;