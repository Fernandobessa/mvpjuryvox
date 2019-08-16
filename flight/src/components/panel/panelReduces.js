const INITIAL_STATE = {flagPassenger:false,flagFlight:false}

export default function(state=INITIAL_STATE,action){
    switch(action.type) {
        case 'CLICK_PASSENGER':
            return {...state, flagPassenger: action.payload}
        case 'CLICK_FLIGHT':   
          return {...state, flagFlight: action.payload}
        default: 
            return state
    }
}
