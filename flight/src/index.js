import ReactDom from 'react-dom'
import React from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import Passenger from './components/passenger/passenger'
import Flight from './components/flight/flight'
import PassengerReducer from './components/passenger/passengerReduces'
import FlightReducer from './components/flight/flightReduces'
import thunk from 'redux-thunk';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const reducers = combineReducers({
    passenger: PassengerReducer,
    name: PassengerReducer,
    gender: PassengerReducer,
    //Flight
    flight: FlightReducer,
    number: FlightReducer,
    origin: FlightReducer,
    destination: FlightReducer,
    departamenturetime: FlightReducer,
    arrivaltime: FlightReducer

})

const store = createStore(reducers, applyMiddleware(thunk))


ReactDom.render((
    <Provider store={store}>
        <Passenger />
        <Flight />
    </Provider>)
    , document.getElementById('root'));   