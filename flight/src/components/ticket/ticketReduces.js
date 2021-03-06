const INITIAL_STATE = { alert:[],ticket: [], passengerid: null, flightid: null, input_flight: null, input_passenger: null }

export default function (state = INITIAL_STATE, action) {
    console.log(action.type)
    switch (action.type) {
        case 'GET_TICKET':
            return { ...state, ticket: action.payload }
        case 'GET_PASSENGER_ID':
            return { ...state, passengerid: action.payload }
        case 'CHANGE_SEATNUMBER':
            return { ...state, seatnumber: action.payload }
        case 'CHANGE_PASSENGER':
            return { ...state, input_passenger: action.payload }
        case 'CHANGE_FLIGHT':
            return { ...state, input_flight: action.payload }
        case 'GET_FLIGHT_ID':
            return { ...state, flightid: action.payload }
        case 'GET_ALERT':
            state.alert.indexOf(action.payload) > -1 ? 
                alert = state.alert 
                : alert = state.alert.concat(action.payload)    
            return { ...state, alert } 
        default:
            return state
    }
}
