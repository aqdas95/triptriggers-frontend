import axios from 'axios';
import {FEEDBACK} from './types'
import path from '../Actions/config'

export const feedback =(loadData)=>(dispatch)=>{ 


const tokenForFeedback = localStorage.getItem("token");
const packageid = localStorage.getItem("packageid");

const header={

    headers:{
        "Content-Type":"application/json",
        Authorization : `Bearer ${tokenForFeedback}`, 
    }
}
// sdend package id here
axios.post(`${path}/feedback`,header,loadData,packageid)
.then((res)=>{
    dispatch({
        type:FEEDBACK,
        payload: res.data
    })
})
}
