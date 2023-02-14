import { useState } from 'react';
import { getWeatherDataFromLocation } from '../api/weather';

export const useLocationWeather = (location) => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    try {
      setLoading(true);
      const apiWeather = await getWeatherDataFromLocation(location);
      setWeather(apiWeather);
    } catch (error) {
      throw new Error('Error setting the weather');
    } finally {
      // is executed when it goes through try or catch (avoid duplicating setLoading)
      setLoading(false);
    }
  };

  return { weather, loading, getWeather };
};

export default useLocationWeather;
