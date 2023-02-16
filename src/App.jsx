/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Weather from './components/WeatherCard';
import useGeolocation from './hooks/useGeolocation';
import { useLocationWeather } from './hooks/useLocationWeather';
import Forecast from './pages/Forecast';

function App() {
  const { location } = useGeolocation();
  const { weather, loading } = useLocationWeather(location);

  return (
    <main className="App">
      <h1>Weather App</h1>
      {loading ? <h2>Loading Weather for your location</h2> : <Weather weather={weather} />}
      <Routes>
        <Route path="/forecast" element={<Forecast />} />
      </Routes>
    </main>
  );
}

export default App;
