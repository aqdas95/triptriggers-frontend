import React from 'react';
import '../CSS/ContentDiv1.css'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
  } from 'reactstrap';

  import {Link} from 'react-router-dom'


class ContentDiv extends React.Component{
render(){
  
return(

<div class="container-fluid">
    
    <div class="row">
        <div class="col-12 mt-3">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="" src="http://via.placeholder.com/300x180" alt="Card image cap" />
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/descriptionpagetour"><Button color="info">Details</Button></Link>
                    </div>
                </div>
                <div class="card-footer">
                    {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                </div>
            </div>
        </div>
    </div>
</div>


)

}
// http://via.placeholder.com/300x180

}

export default ContentDiv;