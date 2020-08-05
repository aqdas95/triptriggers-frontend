import axios from 'axios';
import {UPDATE_CUSTOMER_PROFILE} from './types'

export const PassTokenForCustomerProfileUpdate = ({avatar,
  customerName,
  email,
 password,
 contactNumber,
  cnic,
  city,
  dob,
  gender
})=> (dispatch) => {

const token= localStorage.getItem("token");
console.log(token);

const config={
headers:{

    "Content-Type":"application/json",
    Authorization :`Bearer ${token}`
}

}
const body =JSON.stringify({
avatar,
  customerName,
  email,
 password,
 contactNumber,
  cnic,
  city,
  dob,
  gender,
})

axios.patch("https://localhost:5000/customer/me/update",body,config)
.then((res)=>
dispatch({
    type: UPDATE_CUSTOMER_PROFILE,
    payload: res.data
})
).catch((err)=>
console.log(err)
)
}