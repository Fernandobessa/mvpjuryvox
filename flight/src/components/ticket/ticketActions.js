import axios from 'axios';

const base_url = 'http://localhost:8002/' 



export function changSeatNumber(e) {
    console.log("changed:", e.target.value)
    return {
        type: 'CHANGE_SEATNUMBER',
        payload: e.target.value
    }
}


export function changeFlight(e) {
    console.log("changed:", e.target.value)
    return {
        type: 'CHANGE_FLIGHT',
        payload: e.target.value
    }
}

export function changePassenger(e) {
    console.log("changed:", e.target.value)
    return {
        type: 'CHANGE_PASSENGER',
        payload: e.target.value
    }
}

export const getPassengerData = (data) => {
    console.log(data)
    return {
        type: 'GET_PASSENGER_ID',
        payload: data
    }
};
export function getPassengerById(id){
    console.log(id)
    return dispatch => {
        axios.get(base_url + 'ticket/' + id + '/passenger').then(
            resp => {
                dispatch(getPassengerData(resp.data)
                )
            }
        )

    }

}
export const getTicketData = (data) => {
    return {
        type: 'GET_TICKET',
        payload: data
    }
};

export function getTicket(){
    return dispatch => {
        axios.get(base_url + 'ticket').then(
            resp => {
                dispatch(getFlightById(resp.data.id))
                dispatch(getPassengerById(resp.data.id))
                dispatch(getTicketData(resp.data)
                )
            }
        )

    }

} 
export const getFlightData = (data) => {
    console.log(data.name)
    return {
        type: 'GET_FLIGHT_ID',
        payload: data
    }
}
export function getFlightById(id){
    return dispatch => {
        axios.get(base_url + 'ticket/' + id + '/flight').then(
            resp => {
                dispatch(getFlightData(resp.data)
                )
            }
        )

    }

}

export const addTicketData = (data) => {
    console.log(data.name)
    return {
        type: 'GET_TICKET',
        payload: data
    }
}
export const addTicket = (data) => {
    return dispatch => {
        axios.post(base_url + 'ticket',{
            SeatNumber: data.seatnumber,
            flightID: data.input_flight,
            passengerID: data.input_passenger
        }).then(
            resp => {
                dispatch(getTicket()
                )
            }
        )

    }

}

export const deleteTicket = (id) => {
    return dispatch => {
        axios.delete(base_url + 'ticket/' + id).then(
            resp => {
                dispatch(getTicket())
            }
        )

    }

}