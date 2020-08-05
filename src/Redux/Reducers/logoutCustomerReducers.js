import {LOGOUT_CUSTOMER} from '../Actions/types';


const defaultState={
    
isAuthenticated: null,
token: localStorage.getItem("token"),
}

export default function(state=defaultState,action){
switch(action.type){

case LOGOUT_CUSTOMER :
    localStorage.removeItem("token") 
return{
    ...state,
    ...action.payload,
    isAuthenticated: true,
    token: '',
}

default :return state
 }

}
