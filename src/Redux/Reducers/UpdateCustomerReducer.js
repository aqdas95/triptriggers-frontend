import {UPDATE_CUSTOMER_PROFILE} from '../Actions/types'


const defaultState={
isAuthenticated : null,
Update: []
}

export default function(state=defaultState,action){
switch(action.type){
case UPDATE_CUSTOMER_PROFILE :
    return{
        ...state
        , Update:action.payload,
        isAuthenticated : true,
    }

    default: return state
}


}
