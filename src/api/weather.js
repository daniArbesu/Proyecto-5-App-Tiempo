const OPEN_WEATHER_API_KEY = 'd986ebd55d0d4652aa82e507c36c4419';
const OPEN_WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherDataFromLocation = async ({ lat, lon }) => {
  if (!lat) return {};

  try {
    const res = await fetch(
      `${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );
    const locationWeather = await res.json();

    return Object.keys(locationWeather).length === 0
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
  } catch (error) {
    throw new Error('Error fetching weather data at your location');
  }
};

export const getForecastDataFromLocation = async ({ lat, lon }) => {
  try {
    const res = await fetch(
      `${OPEN_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );
    const json = await res.json();

    const fiveDaysWeatherArray = [];
    const threeHoursPerDay = 24 / 3;

    for (let i = 0; i < json.list.length; i += threeHoursPerDay) {
      fiveDaysWeatherArray.push(json.list.slice(i, i + threeHoursPerDay));
    }

    const mappedForecast = fiveDaysWeatherArray.map((dailyWeather) => {
      return {
        date: new Date(dailyWeather[0].dt * 1000).toLocaleDateString(),
        icon: dailyWeather[4].weather[0].icon,
        description: dailyWeather[4].weather[0].description,
        night_temp: Math.round(Math.min(...dailyWeather.map((hourly) => hourly.main.temp_min))),
        day_temp: Math.round(Math.max(...dailyWeather.map((hourly) => hourly.main.temp_max)))
      };
    });

    return mappedForecast;
  } catch (error) {
    throw new Error('Error fetching forecast data');
  }
};
