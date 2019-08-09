import React, { useState } from 'react';
import { Button } from 'antd';
import WeatherCard from './WeatherCard';

export default () => {
    const [clickedZip, setClickedZip] = useState(null);

    return (
        <div id="layout">
            <h3>Popular Cities</h3>
            <div id="button_group">
                <Button onClick={() => setClickedZip(90001)} type="primary">Los Angeles</Button>
                <Button onClick={() => setClickedZip(60007)} type="primary">Chicago</Button>
                <Button onClick={() => setClickedZip(46220)} type="primary">Indianapolis</Button>
                <Button onClick={() => setClickedZip(10001)} type="primary">New York</Button>
                <Button onClick={() => setClickedZip(88901)} type="primary">Las Vegas</Button>
            </div>
            <WeatherCard zip={clickedZip}/>
        </div>
    );
};
