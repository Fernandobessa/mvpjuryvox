import React from 'react';
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware,createStore,combineReducers} from 'redux'
import Passenger from './components/passenger/passenger'
import PassengerReducer from './components/passenger/passengerReduces'
import promise from 'redux-promise';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const reducers = combineReducers({
    passenger : PassengerReducer,
    name: PassengerReducer,
    gender: PassengerReducer
})


ReactDom.render((
    <Provider store={applyMiddleware(promise)(createStore)(reducers)}>
        <Passenger />
    </Provider>
    ), document.getElementById('root'));   