import React, { useState } from 'react';
import { CircularProgress, Snackbar } from '@mui/material';
import WeatherCard from './WeatherCard';
import getWeather from './getWeather';
import './App.css';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => setCity(e.target.value);

  const handleAddCity = async () => {
    setLoading(true);
    try {
      const response = await getWeather(city);
      setWeather([...weather, response.data]);
    } catch (error) {
      setError("Fehler beim Abrufen des Wetters");
    }
    setLoading(false);
  };

  const handleRemoveCity = (indexToRemove) => {
    setWeather(weather.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="weather-app">
      <input className="weather-input" type="text" onChange={handleInputChange} />
      <button className="weather-button" onClick={handleAddCity}>Stadt hinzufügen</button>
      {loading ? <CircularProgress /> : (
        weather.map((data, index) => (
          <WeatherCard 
            key={index}
            city={data.name}
            description={data.weather[0].description}
            temperature={data.main.temp}
            humidity={data.main.humidity}
            onRemove={() => handleRemoveCity(index)}
          />
        ))
      )}
      {error && <Snackbar open message={error} />}
    </div>
  );
}

export default WeatherApp;
