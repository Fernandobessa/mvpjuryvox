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
        payload: e
    }
}