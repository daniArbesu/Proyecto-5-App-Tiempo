/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import Layout from '../pages/Layout';
import SearchBar from './SearchBar';
import WeatherExtrasCard from './WeatherExtrasCard';

function WeatherCard({ weather }) {
  return (
    <Layout>
      <header className="card-header">
        <SearchBar />
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
          <Link to="/forecast">5-day forecast →</Link>
        </div>
      </article>
    </Layout>
  );
}

function Weather({ weather }) {
  return weather ? <WeatherCard weather={weather} /> : <h2>We couldn&apos;t find your location</h2>;
}

export default Weather;
