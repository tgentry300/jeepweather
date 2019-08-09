import React from 'react';
import './App.css';
import WeatherLayout from './WeatherLayout';
import ZipInput from './ZipInput';

function App() {
    return (
        <React.Fragment>
            <ZipInput/>
            <WeatherLayout/>
        </React.Fragment>
    );
}

export default App;
