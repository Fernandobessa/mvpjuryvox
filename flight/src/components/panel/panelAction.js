import axios from 'axios';
const base_url = 'http://localhost:8002/' 
export function clickPassenger(e) {
    console.log(e)
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