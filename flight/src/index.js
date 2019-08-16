import ReactDom from 'react-dom'
import React from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import Panel from './components/panel/panel'
import PassengerReducer from './components/passenger/passengerReduces'
import FlightReducer from './components/flight/flightReduces'
import PanelReducer from './components/panel/panelReduces'
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
    arrivaltime: FlightReducer,
    //Panel
    flagPassenger: PanelReducer,
    flagFlight: PanelReducer

})

const store = createStore(reducers, applyMiddleware(thunk))



ReactDom.render((
    <Provider store={store}>
        <Panel/>
    </Provider>)
    , document.getElementById('root'));   