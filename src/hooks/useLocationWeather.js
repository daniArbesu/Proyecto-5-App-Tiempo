import { useState } from 'react';
// import withResults from '../mocks/weather-results.json';
import withNoResults from '../mocks/no-results.json';

const OPEN_WEATHER_API_KEY = 'd986ebd55d0d4652aa82e507c36c4419';
const OPEN_WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

export const useLocationWeather = (location) => {
  const [APIweather, setAPIWeather] = useState({});

  const locationWeather = APIweather;

  const weather =
    Object.keys(locationWeather).length === 0
      ? {}
      : {
          name: locationWeather.name,
          country: locationWeather.sys.country,
          date: new Date(locationWeather.dt * 1000).toLocaleString(),
          icon: locationWeather.weather[0].icon,
          description: locationWeather.weather[0].description,
          day_temp: Math.round(locationWeather.main.temp_max),
          night_temp: Math.round(locationWeather.main.temp_min),
          temperature: Math.round(locationWeather.main.temp),
          feels_like: Math.round(locationWeather.main.feels_like),
          rain: locationWeather.rain?.['1h'],
          wind: locationWeather.wind?.speed,
          humidity: locationWeather.main.humidity,
          visibility: locationWeather.visibility / 1000,
          clouds: locationWeather.clouds?.all,
          snow: locationWeather.snow?.['1h']
        };

  const getWeather = () => {
    if (Object.keys(location).length !== 0) {
      // setAPIWeather(withResults);
      const { lat, lon } = location;
      fetch(
        `${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((json) => setAPIWeather(json))
        .catch((err) => console.error(err));
    } else {
      setAPIWeather(withNoResults);
    }
  };

  return { weather, getWeather };
};

export default useLocationWeather;
