import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { fetchWeatherInfo } from './redux/getWeatherActions'
import { Input, Button } from 'antd';

export default () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('90001');

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(fetchWeatherInfo(inputValue))
    }

    const handleEnter = e => {
        if (e.key === "Enter"){
            dispatch(fetchWeatherInfo(inputValue))
        }
    }

    return (
        <div id="input_container">
            <Input
                onKeyDown={handleEnter}
                style={{width: '300px'}}
                onChange={handleInputChange}
                placeholder="Enter your Zip Code"
            />
            <Button type='primary' onClick={handleSubmit}>Search</Button>
        </div>
    );
};
