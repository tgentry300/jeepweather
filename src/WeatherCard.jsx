import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'antd';
import { fetchWeatherInfo } from './redux/getWeatherActions';

export default props => {
    const [todaysDate] = useState(new Date());
    const currentWeather = useSelector(state => state);
    const dispatch = useDispatch();

    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    useEffect(() => {
        props.zip && dispatch(fetchWeatherInfo(props.zip));
    }, [props.zip, dispatch]);

    const kelvinToFahrenheit = kelvin => {
        return Math.floor((kelvin - 273) * (9 / 5) + 32);
    };

    return (
        <div id="todays_weather">
            <Card
                title={`Is Today a good day to take the top down in ${
                    currentWeather.awaitingInput
                        ? 'your city'
                        : currentWeather.location
                }? Let's find out...`}
                style={{ width: '650px', height: '300px' }}
            >
                {currentWeather.awaitingInput ? (
                    <p>Please input your zip code for today's JeepWeather!</p>
                ) : (
                    <React.Fragment>
                        <p>
                            It is {daysOfWeek[todaysDate.getDay()]},{' '}
                            {months[todaysDate.getMonth()]}{' '}
                            {todaysDate.getDate()}.
                        </p>
                        <p>
                            The current temperature is{' '}
                            {kelvinToFahrenheit(currentWeather.temperature)}
                            &deg;F...
                        </p>
                        <p>
                            {currentWeather.isRaining
                                ? "It's currently raining..."
                                : 'No rain right now...'}
                        </p>
                        <p>
                            {currentWeather.cloudCover.all > 50
                                ? "It's cloudy..."
                                : 'Not too many clouds...'}
                        </p>
                        <h2>
                            {currentWeather.isRaining
                                ? 'Too Bad, better leave that top on'
                                : "Take it down, It's a nice day for it!"}
                        </h2>
                    </React.Fragment>
                )}
            </Card>
        </div>
    );
};
