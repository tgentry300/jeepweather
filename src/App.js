import React from 'react';
import './App.css';
import WeatherCard from './WeatherCard';
import ZipInput from './ZipInput';

function App() {
    return (
        <React.Fragment>
            <ZipInput/>
            <WeatherCard/>
        </React.Fragment>
    );
}

export default App;
