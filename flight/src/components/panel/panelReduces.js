const INITIAL_STATE = {alert:null, flagPassenger: false, flagFlight: false, flagTicket: false }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CLICK_PASSENGER':
            return { ...state, flagPassenger: action.payload }
        case 'CLICK_FLIGHT':
            return { ...state, flagFlight: action.payload }
        case 'CLICK_TICKET':
            return { ...state, flagTicket: action.payload }
        case 'GET_ALERT':
            return { ...state, alert: action.payload }
        default:
            return state
    }
}
