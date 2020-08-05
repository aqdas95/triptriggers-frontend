import axios from 'axios';
import {LOGOUT_VENDOR} from './types'
import path from '../Actions/config'

export const logoutVendor = ()=>(dispatch)=>{

const VendorToken = localStorage.getItem("token");

const header = {
headers:{
    "Content-Type":"application/json",
    Authorization : `Bearer ${VendorToken}`
}

}

axios.post(`${path}/vendor/logout`,"",header)
.then((res)=>{
dispatch({
    type: LOGOUT_VENDOR,
    payload : res.data
});

}).catch((err)=>console.log(err))
}