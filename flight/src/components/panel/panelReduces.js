const INITIAL_STATE = { alert: [], flagPassenger: false, flagFlight: false, flagTicket: false }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CLICK_PASSENGER':
            return { ...state, flagPassenger: action.payload }
        case 'CLICK_FLIGHT':
            return { ...state, flagFlight: action.payload }
        case 'CLICK_TICKET':
            return { ...state, flagTicket: action.payload }
        case 'GET_ALERT':
            state.alert.indexOf(action.payload) > -1 ? 
             alert = state.alert 
            : alert = state.alert.concat(action.payload) 
            return { ...state, alert } 

        default:
            return state
    }
}
