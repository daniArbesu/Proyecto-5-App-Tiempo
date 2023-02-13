/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { getWeatherDataFromLocation } from './api/weather';
import './App.css';
import WeatherCard from './components/WeatherCard';
import locationWeather from './mocks/weather-results.json';
// import handleGeolocation from './utils/location';

function App() {
  const [weather, setWeather] = useState(locationWeather);
  // const [location, setLocation] = useState({});

  useEffect(() => {
    // handleGeolocation(setLocation);
    // setWeather(locationWeather);
  }, []);

  useEffect(() => {
    /* getWeatherDataFromLocation(location)
      .then((data) => setWeather(data))
      .catch((err) => console.error(err)); */
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      {weather ? <WeatherCard weather={weather} /> : <h2>We couldn't find your location</h2>}
    </div>
  );
}

export default App;
