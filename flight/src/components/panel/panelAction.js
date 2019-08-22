import axios from 'axios';
const base_url = 'http://localhost:8002/' 
import moment from 'moment'
import dateformat from 'dateformat'

export function clickPassenger(e) {
    return {
        type: 'CLICK_PASSENGER',
        payload: e === false ? true : false
    }
}

export function clickFlight(e) {
    return {
        type: 'CLICK_FLIGHT',
        payload: e === false ? true : false
    }
}

export function clickTicket(e) {
    return {
        type: 'CLICK_TICKET',
        payload: e === false ? true : false
    }
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
                        }).catch(error => {
                            console.log(error)
                        });
                    })
                }).catch(error => {
                    console.log(error)
                });
               })
            }).catch(error => {
                console.log(error)
            });
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

export const getDataAlert = (data) => {
    return {
        type: 'GET_ALERT',
        payload: data
    }
};