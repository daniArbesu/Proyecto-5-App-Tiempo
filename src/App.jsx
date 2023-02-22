/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Forecast from './pages/Forecast';
import LocalWeather from './pages/LocalWeather';

function App() {
  return (
    <main className="App">
      <h1>Weather App</h1>
      <Routes>
        <Route path="/" element={<LocalWeather />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/forecast/:cityIndex" element={<Forecast />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/favorites/:cityIndex" element={<LocalWeather />} />
      </Routes>
    </main>
  );
}

export default App;
