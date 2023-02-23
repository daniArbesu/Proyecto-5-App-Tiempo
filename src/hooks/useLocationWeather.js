import { useEffect, useState } from 'react';
import { getWeatherDataFromLocation } from '../api/weather';

const useLocationWeather = (location) => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        if (location.lat) {
          setLoading(true);
          const apiWeather = await getWeatherDataFromLocation(location);
          if (Object.keys(location).length !== 0) {
            setWeather(apiWeather);
          }
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        throw new Error('Error setting the weather');
      }
    })();
  }, [location.lat, location.lon]);

  return { weather, loading };
};

export default useLocationWeather;
