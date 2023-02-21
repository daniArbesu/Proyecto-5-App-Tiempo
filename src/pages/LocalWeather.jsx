/* eslint-disable react/prop-types */
import { Link, useParams } from 'react-router-dom';
import useLocationWeather from '../hooks/useLocationWeather';
import SearchBar from '../components/SearchBar';
import WeatherExtrasCard from '../components/WeatherExtrasCard';
import favoriteLocations from '../constants/location';
import Layout from './Layout';
import useGeolocation from '../hooks/useGeolocation';

function LocalWeather() {
  const { cityIndex } = useParams();
  const { location } = useGeolocation();
  const selectedLocation = cityIndex ? favoriteLocations[cityIndex].location : location;
  console.log(selectedLocation);
  const forecastLink = cityIndex ? `/forecast/${cityIndex}` : '/forecast/';
  const { weather, loading } = useLocationWeather(selectedLocation);

  return (
    <Layout>
      <header className="card-header">
        <Link to="/favorites">
          <SearchBar />
        </Link>
      </header>
      <article>
        <div className="card-city-info">
          <h2>
            {weather.name}, {weather.country}
          </h2>
          <p className="card-weather-date">{weather.date}</p>
        </div>
        <div className="card-weather-info">
          <div className="weather-wrapper">
            <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="" />
            <p className="weather-description">{weather.description}</p>
          </div>
          <div className="temperature-all-wrapper">
            <div className="temperature-max-min">
              <p>Day {weather.day_temp}º ⬆️</p>
              <p>Night {weather.night_temp}º ⬇️</p>
            </div>
            <div className="temperature-wrapper">
              <div className="degrees">
                <p className="temperature">{weather.temperature}</p>
              </div>
              <div className="degree-sign">
                <p>ºC</p>
              </div>
            </div>
            <p>Feels like {weather.feels_like} º</p>
          </div>
        </div>
        <div className="card-weather-extra">
          <WeatherExtrasCard weatherInfo="rain" weather={weather.rain} />
          <WeatherExtrasCard weatherInfo="wind" weather={weather.wind} />
          <WeatherExtrasCard weatherInfo="humidity" weather={weather.humidity} />
          <WeatherExtrasCard weatherInfo="visibility" weather={weather.visibility} />
          <WeatherExtrasCard weatherInfo="clouds" weather={weather.clouds} />
          <WeatherExtrasCard weatherInfo="snow" weather={weather.snow} />
        </div>
        <div className="card-weather-five-days">
          <Link to={forecastLink}>5-day forecast →</Link>
        </div>
      </article>
    </Layout>
  );
}

export default LocalWeather;
