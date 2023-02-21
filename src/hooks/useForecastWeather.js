import { useEffect, useState } from 'react';
import { getForecastDataFromLocation } from '../api/weather';

const useForecastWeather = (location) => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        if (location.lat) {
          setLoading(true);
          const apiWeather = await getForecastDataFromLocation(location);
          if (Object.keys(location).length !== 0) {
            setWeather(apiWeather);
          }
        }
      } catch (error) {
        throw new Error('Error setting the weather');
      } finally {
        // is executed when it goes through try or catch (avoid duplicating setLoading)
        setLoading(false);
      }
    })();
  }, [location.lat, location.lon]);

  return { weather, loading };
};

export default useForecastWeather;
