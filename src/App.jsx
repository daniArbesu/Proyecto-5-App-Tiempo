/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { getWeatherDataFromLocation } from './api/weather';
import './App.css';
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
    console.log(weather.weather);
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
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
            {weather.rain ? (
              <div className="card-weather-extra-card">
                <div className="card-weather-extra-card--left">
                  <div className="card-weather-extra-card--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      color="#213547"
                      fill="#213547"
                    >
                      <path d="M20.422 8.516c-.178-3.233-3.031-5.778-6.432-5.492-1.087-1.239-2.693-2.024-4.49-2.024-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21.967 0 1.714.25 2.29.644-1.823.922-3.096 2.746-3.212 4.872-2.022.358-3.697 2.127-3.551 4.484zm14.618 2h-10.291c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.256-1.057 2.278-2.355 2.278zm-14.063 8l-1.41-1.41 3.59-3.59 1.41 1.41-3.59 3.59zm8.543-3.59l-1.41-1.41-3.59 3.59 1.41 1.41 3.59-3.59zm4.875 0l-1.41-1.41-3.59 3.59 1.41 1.41 3.59-3.59z" />
                    </svg>
                  </div>
                  <p>Rain </p>
                </div>
                <div className="card-weather-extra-card--right">
                  <p>{weather.rain['1h']} cm</p>
                </div>
              </div>
            ) : null}
            <div className="card-weather-extra-card">
              <div className="card-weather-extra-card--left">
                <div className="card-weather-extra-card--icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    color="#213547"
                    fill="#213547"
                  >
                    <path d="M11 10h-5v-2h5c.552 0 1-.448 1-1s-.448-1-1-1c-.403 0-.747.242-.905.587l-1.749-.956c.499-.965 1.494-1.631 2.654-1.631 3.971 0 3.969 6 0 6zm7 7c0-1.656-1.344-3-3-3h-7v2h7c.552 0 1 .448 1 1s-.448 1-1 1c-.403 0-.747-.242-.905-.587l-1.749.956c.499.965 1.494 1.631 2.654 1.631 1.656 0 3-1.344 3-3zm1.014-7.655c.082-.753.712-1.345 1.486-1.345.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-8.5v2h8.5c1.932 0 3.5-1.568 3.5-3.5s-1.568-3.5-3.5-3.5c-1.624 0-2.977 1.116-3.372 2.617l1.886.728zm-9.014 1.655h-8v2h8v-2zm-4 3h-6v2h6v-2zm-2-6h-4v2h4v-2z" />
                  </svg>
                </div>
                <p>Wind </p>
              </div>
              <div className="card-weather-extra-card--right">
                <p>{weather.wind.speed} m/s</p>
              </div>
            </div>
            <div className="card-weather-extra-card">
              <div className="card-weather-extra-card--left">
                <div className="card-weather-extra-card--icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    color="#213547"
                    fill="#213547"
                  >
                    <path d="M11.234 14.141c0 .714-.138 1.249-.414 1.608-.276.358-.681.538-1.215.538-.512 0-.907-.184-1.187-.552-.278-.367-.418-.899-.418-1.594 0-1.418.535-2.127 1.606-2.127.524 0 .927.184 1.208.552.28.368.42.893.42 1.575zm-2.061.01c0 .394.035.688.105.882.07.194.182.291.337.291.298 0 .447-.391.447-1.173 0-.776-.149-1.163-.447-1.163-.155 0-.268.095-.337.286-.07.19-.105.483-.105.877zm5.263-2.039l-3.774 6.804h-1.117l3.774-6.804h1.117zm1.564 4.747c0 .711-.138 1.245-.414 1.603-.276.359-.681.538-1.215.538-.512 0-.908-.184-1.187-.552-.279-.368-.419-.897-.419-1.589 0-1.418.535-2.127 1.606-2.127.524 0 .927.184 1.208.552.281.367.421.893.421 1.575zm-2.062.009c0 .394.035.688.105.882.07.194.182.291.337.291.298 0 .447-.391.447-1.173 0-.776-.149-1.163-.447-1.163-.155 0-.268.095-.337.286-.07.191-.105.484-.105.877zm-1.938-11.308c2.725 5.186 6 6.718 6 10.515 0 3.267-2.691 5.925-6 5.925s-6-2.658-6-5.925c0-3.797 3.274-5.327 6-10.515zm0-5.56c-2.333 8.958-8 10.188-8 16.075 0 4.378 3.579 7.925 8 7.925 4.421 0 8-3.547 8-7.925 0-5.887-5.667-7.117-8-16.075z" />
                  </svg>
                </div>
                <p>Humidity </p>
              </div>
              <div className="card-weather-extra-card--right">
                <p>{weather.main.humidity} %</p>
              </div>
            </div>
          </div>
          <div className="card-weather-five-days">
            <a href="/">5-day forecast →</a>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
