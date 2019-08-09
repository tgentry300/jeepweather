import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

export default props => {
    const [todaysDate] = useState(Date);
    const [currentWeather, setCurrentWeather] = useState({
        isRaining: null,
        cloudCover: null,
        temperature: null
    });
    const [location, setLocation] = useState();

    const kelvinToFahrenheit = kelvin => {
        return Math.floor((kelvin - 273) * (9 / 5) + 32);
    };

    // useEffect(() => {
    //     fetch(
    //         `http://api.openweathermap.org/data/2.5/weather?zip=${
    //             props.inputVal
    //         }&appId=b88e27e929a98a58c2a1a417998ed2ea`
    //     )
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setCurrentWeather({
    //                 isRaining: data.rain ? true : false,
    //                 cloudCover: data.clouds,
    //                 temperature: kelvinToFahrenheit(data.main.temp)
    //             });
    //             setLocation(data.name);
    //         });
    // }, [props.inputVal]);

    return (
        <div id="todays_weather">
                <Card
                    title={`Is Today a good day to go topless in ${location}? Let's find out...`}
                    style={{ width: '650px', height: '400px' }}
                >
                    <p>
                        Today's Date is{' '}
                        {todaysDate
                            .split(' ')
                            .slice(0, 3)
                            .join(' ')}
                        ,
                    </p>
                    <p>
                        The current temperature is {currentWeather.temperature}
                        &deg;F...
                    </p>
                    <p>
                        {currentWeather.isRaining
                            ? "It's currently raining..."
                            : 'No rain right now...'}
                    </p>
                    <p>
                        {currentWeather.cloudCover > 50
                            ? "It's cloudy..."
                            : 'Not too many clouds...'}
                    </p>
                </Card>
        </div>
    );
};
