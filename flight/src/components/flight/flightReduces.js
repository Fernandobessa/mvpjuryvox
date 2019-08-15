const INITIAL_STATE = {
    flight:[],number:'',origin:'',destination:'',
    departamenturetime:'',arrivaltime:''}

export default function(state=INITIAL_STATE,action){
    switch(action.type) {
        case 'DELETE_FLIGHT':
            return {...state, flight: action.payload}
        case 'CHANGE_NUMBER':
            return {...state, number: action.payload}
        case 'CHANGE_ORIGIN':
            return {...state, origin: action.payload}
        case 'CHANGE_DESTINATION':
            return {...state, destination: action.payload}
        case 'CHANGE_DEPARTURETIME':
            return {...state, departamenturetime: action.payload}    
        case 'CHANGE_ARRIVALTIME':
            return {...state, arrivaltime: action.payload}
        case 'GET_FLIGHT':
            return {...state, flight: action.payload}
        case 'ADD_FLIGHT':
            return {...state, flight: action.payload}       
        default: 
            return state
    }
}
