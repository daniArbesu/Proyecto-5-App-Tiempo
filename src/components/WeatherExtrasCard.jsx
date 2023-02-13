/* eslint-disable react/prop-types */
import extrasLogosSVGPaths from '../constants/weather';

function WeatherExtrasCard({ weatherInfo, weather }) {
  const cardTitle = extrasLogosSVGPaths[weatherInfo].title;
  const logoPath = extrasLogosSVGPaths[weatherInfo].path;
  const weatherUnits = extrasLogosSVGPaths[weatherInfo].units;

  return (
    <div className="card-weather-extra-card">
      <div className="card-weather-extra-card--left">
        <div className="card-weather-extra-card--icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d={logoPath} />
          </svg>
        </div>
        <p>{cardTitle} </p>
      </div>
      <div className="card-weather-extra-card--right">
        <p>
          {weather} {weatherUnits}
        </p>
      </div>
    </div>
  );
}

export default WeatherExtrasCard;
