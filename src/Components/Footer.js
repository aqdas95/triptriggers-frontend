import React from 'react';
import '../CSS/Footer1.css'
import { 
    BrowserRouter as Router, 
 
    Link, 

} from 'react-router-dom';
class Footer extends React.Component{
render(){
return(

    
        <div className="footer">
<div className="row-footer">
  <div className="column-footer">
    <h5 className="heading-div">Trip Triggers</h5>
    <div className="links-in-footer"><Link to="/" className="link-tag-css-footer">Home</Link></div>
    <div className="links-in-footer"><Link to="/customerlogin" className="link-tag-css-footer">Customer Login</Link></div>
    
   
  </div>

  <div className="column-footer" >
  <h5 className="heading-div">Trip Triggers</h5>
  <div className="links-in-footer">Home</div>
    <div className="links-in-footer">About Us</div>
    <div className="links-in-footer">Career At Trip Triggers</div>
  </div>
  
  <div class="column-footer" >
  <h5 className="heading-div1">Follow Us On</h5>
  
  <div class="footer-social-icons">
  
    <ul class="social-icons">
        <li><a href="" class="social-icon"> <i class="fa fa-facebook"></i></a></li>
        <li><a href="" class="social-icon"> <i class="fa fa-twitter"></i></a></li>
        <li><a href="" class="social-icon"> <i class="fa fa-rss"></i></a></li>
        <li><a href="" class="social-icon"> <i class="fa fa-youtube"></i></a></li>
        <li><a href="" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
        
    </ul>
</div>


  </div>
</div>
</div>

  

)


}


}
export default Footer;