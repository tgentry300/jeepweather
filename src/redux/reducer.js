import { GET_WEATHER_REQUEST, GET_WEATHER_RESPONSE } from './getWeatherActions'

const initialState = {
    fetching: false,
    isRaining: null,
    cloudCover: null,
    temperature: null,
    location: null,
    awaitingInput: true,
}


export function weatherReducer (state = initialState, action){
    switch(action.type) {
        case GET_WEATHER_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case GET_WEATHER_RESPONSE:
            return {
                fetching: false,
                awaitingInput: false,
                isRaining: action.payload.rain ? true : false,
                cloudCover: action.payload.clouds,
                temperature: action.payload.main.temp,
                location: action.payload.name,
            }
        default:
            return state
    }
}