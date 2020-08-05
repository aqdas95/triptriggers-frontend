import React from 'react';
import '../CSS/PaymentForm1.css'
import {Button,Form,Input,FormGroup,Label} from 'reactstrap'

import Navbars from '../Components/Navbars'
class PaymentForm extends React.Component{

render(){
return(
<div><Navbars />
<div class="row">

    <div class="container">
      <Form>
        <FormGroup>
      
        <div class="row">
          <div class="col-50">
            <h3>Payment Form</h3>
            <Label> <b>Full Name</b></Label>
            <Input type="text"   placeholder="Your Name"></Input>
            <Label > <b>Email</b></Label>
            <Input type="text"   placeholder="email@gmail.com"></Input>
            <Label > <b>Address</b></Label>
            <Input type="text"   placeholder="Enter Address"></Input>
            <Label><b> City</b></Label>
            <Input type="text"   placeholder="Your City"></Input>

            <div class="row">
              <div class="col-50">
                <Label><b>State</b></Label>
                <Input type="text" placeholder="Your State"></Input>
              </div>
              <div class="col-50">
                <Label><b>Zip</b></Label>
                <Input type="text" placeholder="0000"></Input>
              </div>
            </div>
          </div>

          <div class="col-50">   
             <h3>Card Information</h3>            
           
            <Label><b>Name On The Card</b></Label>
            <Input type="text" placeholder="Card Name"></Input>
            <Label><b>Card number</b></Label>
            <Input type="text"  placeholder="0000-0000-0000-0000"></Input>
           
          </div>
          
        </div>
        
        <Button color="primary">Checkout</Button>
      </FormGroup>
      </Form>
    </div>


</div>

</div>
)


}

}

export default PaymentForm;