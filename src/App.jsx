/* eslint-disable no-console */
import { useEffect } from 'react';
// import { getWeatherDataFromLocation } from './api/weather';
import './App.css';
import Weather from './components/WeatherCard';
import { useLocationWeather } from './hooks/useLocationWeather';

// import handleGeolocation from './utils/location';

function App() {
  // const [weather, setWeather] = useState(locationWeather);
  const weather = useLocationWeather();
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
      <Weather weather={weather} />
    </div>
  );
}

export default App;
