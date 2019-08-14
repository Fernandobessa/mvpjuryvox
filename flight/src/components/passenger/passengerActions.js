import axios from 'axios';

const base_url = 'http://localhost:4000/passenger'

export function changeName(e){
    console.log("changed:",e.target.value)
    return {
        type: 'CHANGE_NAME',
        payload: e.target.value
    }
}

export function changeGender(e){
    return {
        type: 'CHANGE_GENDER',
        payload: e.target.value
    }
}

export const getPassenger = () => {
    const request = axios.get(base_url)
    return { 
        type: 'GET_PASSENGER',
        payload: request
    }

}

export const addPassenger = (data) => {
    console.log(data)
    const request = axios.post(base_url, {
        name: data.name,
        gender: data.gender
      })
    return { 
        type: 'ADD_PASSENGER',
        payload: request
    }

}