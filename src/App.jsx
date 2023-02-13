/* eslint-disable no-console */
import { useEffect, useState } from 'react';
// import { getWeatherDataFromLocation } from './api/weather';
import './App.css';
import Weather from './components/WeatherCard';
import { useLocationWeather } from './hooks/useLocationWeather';
import geoLocation from './mocks/location.json';

import handleGeolocation from './utils/location';

function App() {
  // const [weather, setWeather] = useState(locationWeather);
  const [location, setLocation] = useState(geoLocation);
  const { weather, getWeather } = useLocationWeather(location);

  useEffect(() => {
    handleGeolocation(setLocation);
    // setWeather(locationWeather);
  }, []);

  useEffect(() => {
    /* getWeatherDataFromLocation(location)
      .then((data) => setWeather(data))
      .catch((err) => console.error(err)); */
    getWeather();
  }, [location]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather weather={weather} />
    </div>
  );
}

export default App;
