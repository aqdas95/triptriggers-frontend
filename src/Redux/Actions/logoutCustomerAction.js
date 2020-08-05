import axios from 'axios';
import {LOGOUT_CUSTOMER} from './types'
import path from '../Actions/config'

export const logoutCustomer = ()=>(dispatch)=>{

    const VendorToken = localStorage.getItem("token");
    
    const header = {
    headers:{
        "Content-Type":"application/json",
        Authorization : `Bearer ${VendorToken}`
    }
    
    }
    
    axios.post(`${path}/customer/logout`,"",header)
    .then((res)=>{
    dispatch({
        type: LOGOUT_CUSTOMER,
        payload : res.data
    });
    
    }).catch((err)=>console.log(err))
    }