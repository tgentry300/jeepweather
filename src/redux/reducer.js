import { GET_WEATHER_REQUEST, GET_WEATHER_RESPONSE, SET_WEATHER } from './getWeatherActions'

const initialState = {
    fetching: false,
    isRaining: null,
    cloudCover: null,
    temperature: null,
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
                isRaining: action.payload.rain ? true : false,
                cloudCover: action.payload.clouds,
                temperature: action.payload.main.temp
            }
        default:
            return state
    }
}