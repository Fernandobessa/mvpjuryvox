const INITIAL_STATE = {passenger:[],name:'',gender:''}

export default function(state=INITIAL_STATE,action){
    switch(action.type) {
        case 'CHANGE_GENDER':
            return {...state, gender: action.payload}
        case 'CHANGE_NAME':
            return {...state, name: action.payload}
        case 'GET_PASSENGER':
            return {...state, passenger: action.payload}
        case 'ADD_PASSENGER':
            return {...state, passenger: action.payload}       
        default: 
            return state
    }
}
