import axios from 'axios';

const base_url = 'http://localhost:8002/passenger'


export function changeName(e) {
    console.log("changed:", e.target.value)
    return {
        type: 'CHANGE_NAME',
        payload: e.target.value
    }
}

export function changeGender(e) {
    return {
        type: 'CHANGE_GENDER',
        payload: e.target.value
    }
}

export const addGetData = (data) => {
    console.log(data)
    return {
        type: 'GET_PASSENGER',
        payload: data
    }
};

export const deletePassenger = (id) => {
    return dispatch => {
        axios.delete(base_url + '/' + id).then(
            resp => {
                dispatch(getPassenger())
            }
        )

    }

}

export function getPassenger(){
    return dispatch => {
        axios.get(base_url).then(
            resp => {
                dispatch(addGetData(resp.data)
                )
            }
        )

    }

}

export const addPassenger = (data) => {
    return dispatch => {
        axios.post(base_url,{
            name: data.name,
            gender: data.gender
        }).then(
            resp => {
                dispatch(addGetData(resp.data)
                )
            }
        )

    }

}