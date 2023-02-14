import { useState } from 'react';
import { getWeatherDataFromLocation } from '../api/weather';

export const useLocationWeather = () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const getWeather = async (location) => {
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
