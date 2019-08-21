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
    return {
        type: 'CHANGE_FLIGHT',
        payload: JSON.parse(e.target.value)
    }
}

export function changePassenger(e) {
    return {
        type: 'CHANGE_PASSENGER',
        payload: JSON.parse(e.target.value)
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
                dispatch(getTicketData(resp.data))
            })
} 
}


export const addTicketData = (data) => {
    console.log(data)
    return {
        type: 'GET_TICKET',
        payload: data
    }
}


export const addTicket = (data) => {
    console.log(data)
    return dispatch => {
        axios.post(base_url + 'ticket',{
            SeatNumber: data.seatnumber,
            flightData: data.input_flight,
            flightId: data.input_flight.id,
            passengerData: data.input_passenger,
            passengerId: data.input_passenger.id
        }).then(
            resp => {
                dispatch(getTicket()
                )
                dispatch(getAlertPassenger())
            }
        )

    }

}

export const deleteTicket = (id) => {
    return dispatch => {
        axios.delete(base_url + 'ticket/' + id).then(
            resp => {
                dispatch(getAlertPassenger())
                dispatch(getTicket())
            }
        )

    }

}


export function getAlertPassenger(){
    console.log("entrou aqui")

    return dispatch => {
        axios.get(base_url + 'passenger').then(
            resp => {
               resp.data.forEach(item => {
                axios.get(base_url + 'passenger/' + item.id + '/ticket').then(resp => {
                        if(resp.data.length >= 3){
                            dispatch(getDataAlert(item.name))
                        }                
                })

               });
            })
} 

}
export const getDataAlert = (data) => {
    console.log(data)
    return {
        type: 'GET_ALERT',
        payload: data
    }
};
