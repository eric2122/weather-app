import React from 'react';

function WeatherCard({ city, description, temperature, humidity, onRemove }) {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p>{description}</p>
      <p>Temperatur: {temperature}°C</p>
      <p>Feuchtigkeit: {humidity}%</p>
      <button onClick={onRemove}>Entfernen</button>
    </div>
  );
}

export default WeatherCard;
