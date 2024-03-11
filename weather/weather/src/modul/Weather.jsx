import React from 'react';
import './Weather.css'; 


const Weather = ({ weather }) => {
  if (!weather || !weather.main) {
    return null;
  }

  const celsiusTemperature = (weather.main.temp - 273.15).toFixed(2);

  return (
    <div className="weather-card">
      <h2>{weather.name} Weather</h2>
      <p className="temperature">Temperature: {celsiusTemperature} °C</p>
      <p className="description">Description: {weather.weather[0].description}</p>
    </div>
  );
};

export default Weather;

