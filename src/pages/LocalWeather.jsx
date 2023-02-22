/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import useLocationWeather from '../hooks/useLocationWeather';
import favoriteLocations from '../constants/location';
import useGeolocation from '../hooks/useGeolocation';
import Weather from '../components/WeatherCard';

function LocalWeather() {
  const { cityIndex } = useParams();
  const { location } = useGeolocation();
  const selectedLocation = cityIndex ? favoriteLocations[cityIndex].location : location;
  const { weather, loading } = useLocationWeather(selectedLocation);
  const forecastLink = cityIndex ? `/forecast/${cityIndex}` : '/forecast/';

  return loading ? (
    <h2>Loading Weather Data</h2>
  ) : (
    <Weather weather={weather} link={forecastLink} />
  );
}

export default LocalWeather;
