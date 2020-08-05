import {ADD_TOUR_SERVICES_PACKAGE} from '../Actions/types'

const defineState = {
   loadData : [],
    isAuthenticated : null
};

export default function(state=defineState,action){

switch(action.type){
case  ADD_TOUR_SERVICES_PACKAGE :
return {

...state,

loadData :action.payload  ,
isAuthenticated : true,

}

default :
return state;
    

}


}