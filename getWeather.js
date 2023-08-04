import axios from 'axios';

const getWeather = (city) => {
  const url = `http://localhost:3001/weather?city=${city}`;
  return axios.get(url);
};

export default getWeather;
