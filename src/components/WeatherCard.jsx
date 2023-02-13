import WeatherExtrasCard from './WeatherExtrasCard';

const WeatherCard = ({ weather }) => {
  return (
    <section className="card-wrapper">
      <header className="card-header">
        <div className="search-bar">
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
              fillRule="nonzero"
            />
          </svg>
          <p>Search other cities</p>
        </div>
      </header>
      <article>
        <div className="card-city-info">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="card-weather-date">{new Date(weather.dt * 1000).toLocaleString()}</p>
        </div>
        <div className="card-weather-info">
          <div className="weather-wrapper">
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
            <p className="weather-description">{weather.weather[0].description}</p>
          </div>
          <div className="temperature-all-wrapper">
            <div className="temperature-max-min">
              <p>Day {Math.round(weather.main.temp_max)}º ⬆️</p>
              <p>Night {Math.round(weather.main.temp_min)}º ⬇️</p>
            </div>
            <div className="temperature-wrapper">
              <div className="degrees">
                <p className="temperature">{Math.round(weather.main.temp)}</p>
              </div>
              <div className="degree-sign">
                <p>ºC</p>
              </div>
            </div>
            <p>Feels like {Math.round(weather.main.feels_like)} º</p>
          </div>
        </div>
        <div className="card-weather-extra">
          <WeatherExtrasCard weatherInfo="rain" weather={weather.rain['1h']} />
          <WeatherExtrasCard weatherInfo="wind" weather={weather.wind.speed} />
          <WeatherExtrasCard weatherInfo="humidity" weather={weather.main.humidity} />
          <WeatherExtrasCard weatherInfo="visibility" weather={weather.visibility / 1000} />
          <WeatherExtrasCard weatherInfo="clouds" weather={weather.clouds.all} />
          <WeatherExtrasCard weatherInfo="snow" weather={weather.snow['1h']} />
        </div>
        <div className="card-weather-five-days">
          <a href="/">5-day forecast →</a>
        </div>
      </article>
    </section>
  );
};

export default WeatherCard;
