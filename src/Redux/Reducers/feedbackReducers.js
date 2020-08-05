import {FEEDBACK} from '../Actions/types'


const defaultState={
feedback:[],
isAuthenticated: null,

}


export default function(state=defaultState,action){
switch(action.type){

case FEEDBACK: return{
    ...state,
    feedback:action.payload,
    isAuthenticated : true,
}
default : return state
}

}