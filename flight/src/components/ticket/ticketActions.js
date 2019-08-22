import axios from 'axios';
const base_url = 'http://localhost:8002/' 
import moment from 'moment'
import dateformat from 'dateformat'



export function changSeatNumber(e) {
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
    return {
        type: 'GET_TICKET',
        payload: data
    }
}


export const addTicket = (data) => {
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

export const getPossibleSuspect = (data) => {
    let i = 0
    let now =  new Date()
    let retorno = null

    now = dateformat(now,"yyyy-mm-dd").toString()

    data.forEach(item => {
        let dataFlight = item.flightData.departamenturetime
        dataFlight = dateformat(dataFlight,"yyyy-dd-mm").toString()
        let days = moment(now, 'YYYY-MM-DD').diff(moment(dataFlight, 'YYYY-MM-DD'), 'days')
        console.log(days)
        if(days>30){
            i = i + 1
        }
        if(i>=3){
            console.log(item)
            retorno = item
        }

    })
    return retorno
    
}


export function getAlertPassenger(){

    return dispatch => {
        axios.get(base_url + 'passenger').then(
            resp => {
               resp.data.forEach(item => {
                axios.get(base_url + 'passenger/' + item.id + '/ticket').then(resp => {
                    console.log(resp.data)
                    resp.data.forEach(item => {
                        console.log(item)
                        axios.get(base_url + 'passenger/' + item.passengerData.id + '/ticket?flightData.destination='+item.flightData.destination).then(resp => {
                            if(resp.data.length >=3 ){
                                const suspect = getPossibleSuspect(resp.data)
                                if(suspect){
                                    dispatch(getDataAlert(item.passengerData.name))
                                }
                                
                                
                            }
                        })
                    })
                })

               });
            })
} 

}
export const getDataAlert = (data) => {
    return {
        type: 'GET_ALERT',
        payload: data
    }
};
