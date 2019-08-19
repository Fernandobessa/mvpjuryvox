const INITIAL_STATE = { ticket: [], passengerid: null, flightid: null }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_TICKET':
            return { ...state, ticket: action.payload }
        case 'GET_PASSENGER_ID':
            console.log(action)
            return { ...state, passengerid: action.payload }
        case 'CHANGE_SEATNUMBER':
            return { ...state, seatnumber: action.payload }
        case 'GET_ALL_PASSENGER':
            return { ...state, passengers: action.payload }
        case 'GET_ALL_FLIGHTS':
            return { ...state, flights: action.payload }
        case 'GET_FLIGHT_ID':
            return { ...state, flightid: action.payload }
        default:
            return state
    }
}
