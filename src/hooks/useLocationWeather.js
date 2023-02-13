/* eslint-disable no-unsafe-optional-chaining */
import APIWeather from '../mocks/weather-results.json';

export const useLocationWeather = () => {
  const locationWeather = APIWeather;

  const weather = {
    name: locationWeather?.name,
    country: locationWeather?.sys.country,
    date: new Date(locationWeather?.dt * 1000).toLocaleString(),
    icon: locationWeather?.weather[0].icon,
    description: locationWeather?.weather[0].description,
    day_temp: Math.round(locationWeather?.main.temp_max),
    night_temp: Math.round(locationWeather?.main.temp_min),
    temperature: Math.round(locationWeather?.main.temp),
    feels_like: Math.round(locationWeather?.main.feels_like),
    rain: locationWeather?.rain?.['1h'],
    wind: locationWeather?.wind?.speed,
    humidity: locationWeather?.main.humidity,
    visibility: locationWeather?.visibility / 1000,
    clouds: locationWeather?.clouds.all,
    snow: locationWeather?.snow?.['1h']
  };

  return weather;
};

export default useLocationWeather;
