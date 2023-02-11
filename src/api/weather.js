/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const OPEN_WEATHER_API_KEY = 'd986ebd55d0d4652aa82e507c36c4419';
const OPEN_WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

const apiHeaders = {
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Accept: 'application/json'
};

const API_OPENWEATHER = axios.create({
  headers: apiHeaders,
  baseURL: OPEN_WEATHER_API_URL,
  timeout: 6000
});

export const getWeatherDataFromLocation = async ({ lat, lon }) => {
  try {
    const response = await API_OPENWEATHER.get(
      `/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getForecastDataFromLocation = async ({ lat, lon }) => {
  try {
    const response = await API_OPENWEATHER.get(
      `/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
