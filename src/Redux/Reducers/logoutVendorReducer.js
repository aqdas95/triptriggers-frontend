import {LOGOUT_VENDOR} from '../Actions/types'

const defaultState={


isAuthenticated: null,
token : localStorage.getItem("token"),


}


export default function(state=defaultState,action){
switch(action.type){
case LOGOUT_VENDOR :
    localStorage.removeItem("token");
    return{
        isAuthenticated: true,
        ...state,
        ...action.payload,
        token: '',
        
    }
default : return state
}

}