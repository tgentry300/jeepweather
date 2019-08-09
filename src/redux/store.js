import thunk from 'redux-thunk'
import {
    compose,
    applyMiddleware,
    createStore,
} from "redux";

import {
    weatherReducer
} from './reducer'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(weatherReducer, composeEnhancers(applyMiddleware(thunk)))