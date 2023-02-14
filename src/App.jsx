import { useEffect } from 'react';
import './App.css';
import Weather from './components/WeatherCard';
import useGeolocation from './hooks/useGeolocation';
import { useLocationWeather } from './hooks/useLocationWeather';

function App() {
  const { location } = useGeolocation();
  const { weather, loading, getWeather } = useLocationWeather();

  useEffect(() => {
    // Obtain the weather for the current location
    if (Object.keys(location).length !== 0) {
      getWeather(location);
    }
  }, [location.lat, location.lon]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      {loading ? <h2>Loading Weather for your location</h2> : <Weather weather={weather} />}
    </div>
  );
}

export default App;
