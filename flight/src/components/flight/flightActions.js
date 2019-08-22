import axios from 'axios';

const base_url = 'http://localhost:8002/flight'


export function changeNumber(e) {
    console.log("changed:", e.target.value)
    return {
        type: 'CHANGE_NUMBER',
        payload: e.target.value
    }
}

export function changeOrigin(e) {
    return {
        type: 'CHANGE_ORIGIN',
        payload: e.target.value
    }
}

export function changeDestination(e) {
    return {
        type: 'CHANGE_DESTINATION',
        payload: e.target.value
    }
}

export function changeDepartureTime(e) {
    return {
        type: 'CHANGE_DEPARTURETIME',
        payload: e.target.value
    }
}

export function changeArrivalTime(e) {
    return {
        type: 'CHANGE_ARRIVALTIME',
        payload: e.target.value
    }
}

export const addGetData = (data) => {
    console.log(data)
    return {
        type: 'GET_FLIGHT',
        payload: data
    }
};

export const deleteFlight = (id) => {
    return dispatch => {
        axios.delete(base_url + '/' + id).then(
            resp => {
                dispatch(getFlight())
            }
        ).catch(error => {
            console.log(error)
        });

    }

}

export function getFlight(){
    return dispatch => {
        axios.get(base_url).then(
            resp => {
                dispatch(addGetData(resp.data)
                )
            }
        ).catch(error => {
            console.log(error)
        });

    }

}

export const addFlight = (data) => {
    return dispatch => {
        axios.post(base_url,{
            number: data.number,
            origin: data.origin,
            destination: data.destination,
            departamenturetime : data.departamenturetime,
            arrivaltime: data.arrivaltime
        }).then(
            resp => {
                dispatch(getFlight()
                )
            }
        ).catch(error => {
            console.log(error)
        });

    }

}