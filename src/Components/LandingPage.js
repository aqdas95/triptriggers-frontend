import React from 'react';
import Navbars from '../Components/Navbars'
import Footer from '../Components/Footer'
import '../CSS/LandingPage1.css'
import ContentDiv from '../Components/ContentDiv' 
import {Link} from 'react-router-dom'
import DashboardCard from '../Components/DashboardCard'
class LandingPage extends React.Component{

render(){

return(
    <React.Fragment>  <Navbars />
    {/* <div className="pic"></div> */}
        <body className="body">
      



<div className="landing-main-div">
<div className="main-landing">

<h3 className="fresh-recommendation">Tour For You</h3>
<div><ContentDiv /><br /></div>
{/* <div><ContentDiv /><br /></div> */}
{/* <h5 className="link-load-more"><Link>Load More</Link></h5> */}
</div>
 


<h3 className="fresh-recommendation">Hotel In Your Area</h3>

<div ><ContentDiv /><br /></div> 
 <div><ContentDiv /><br /></div>

{/* <div><h5 className="link-load-more"><Link>Load More</Link></h5></div> */}


<h3 className="fresh-recommendation">Car For Rent</h3>


<div><ContentDiv /><br /></div>
<div><ContentDiv /><br /></div>
{/* <h5 className="link-load-more"><Link>Load More</Link></h5> */}

</div>
{/* <Footer /> */}
</body>
</React.Fragment>
)

}

}

export default LandingPage;