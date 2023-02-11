/* const locationWeather = {
  coord: { lon: -0.3471, lat: 39.4666 },
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
  base: 'stations',
  main: {
    temp: 9.12,
    feels_like: 9.12,
    temp_min: 7.53,
    temp_max: 11,
    pressure: 1036,
    humidity: 75
  },
  visibility: 10000,
  wind: { speed: 0.89, deg: 135, gust: 0.89 },
  clouds: { all: 0 },
  dt: 1676054792,
  sys: { type: 2, id: 2036969, country: 'ES', sunrise: 1676012408, sunset: 1676050274 },
  timezone: 3600,
  id: 6362115,
  name: 'Valencia',
  cod: 200
}; */

const locationWeather = {
  coord: {
    lon: 10.99,
    lat: 44.34
  },
  weather: [
    {
      id: 501,
      main: 'Rain',
      description: 'moderate rain',
      icon: '10d'
    }
  ],
  base: 'stations',
  main: {
    temp: 298.48,
    feels_like: 298.74,
    temp_min: 297.56,
    temp_max: 300.05,
    pressure: 1015,
    humidity: 64,
    sea_level: 1015,
    grnd_level: 933
  },
  visibility: 10000,
  wind: {
    speed: 0.62,
    deg: 349,
    gust: 1.18
  },
  rain: {
    '1h': 3.16
  },
  clouds: {
    all: 100
  },
  dt: 1661870592,
  sys: {
    type: 2,
    id: 2075663,
    country: 'IT',
    sunrise: 1661834187,
    sunset: 1661882248
  },
  timezone: 7200,
  id: 3163858,
  name: 'Zocca',
  cod: 200
};

export default locationWeather;
