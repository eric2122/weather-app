require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
const apiKey = process.env.WEATHER_API_KEY;

app.use(cors());

app.get('/weather', (req, res) => {
  const city = req.query.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  console.log("URL: ", url);
  console.log("API Key: ", apiKey);

  axios.get(url)
    .then(response => res.json(response.data))
    .catch(error => {
      console.log(error.response.data); // Logge die Fehlerantwort
      res.status(400).json({ error: 'Fehler beim Abrufen der Wetterdaten' });
    });
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
