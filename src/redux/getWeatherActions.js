export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_RESPONSE = 'GET_WEATHER_RESPONSE';

const WEATHER_URL = zip =>
    `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appId=b88e27e929a98a58c2a1a417998ed2ea`;

export function fetchWeatherInfo(zip) {
    return dispatch => {
        dispatch(getWeatherRequest());

        fetch(WEATHER_URL(zip))
            .then(res => res.json())
            .then(data => {
                dispatch(getWeatherResponse(data));
            });
    };
}

const getWeatherRequest = () => {
    return { type: GET_WEATHER_REQUEST };
};

const getWeatherResponse = data => {
    return {
        type: GET_WEATHER_RESPONSE,
        payload: data
    }
}