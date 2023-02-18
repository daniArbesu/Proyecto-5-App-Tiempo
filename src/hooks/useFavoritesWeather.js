import { useEffect, useState } from 'react';
import { getWeatherDataFromLocation } from '../api/weather';

const useFavoritesWeather = (favorites) => {
  const [favoritesWeather, setFavoritesWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFavoritesWeather = () => {
    setLoading(true);
    favorites.map(async (favoriteLocation) => {
      await getWeatherDataFromLocation(favoriteLocation.location)
        .then((weatherData) => {
          setFavoritesWeather([...favoritesWeather, weatherData]);
        })
        .catch(() => {
          setLoading(false);
          throw new Error('Something went wrong fecthing Favorites Weather Data');
        });
    });
    console.log(favoritesWeather);
    setLoading(false);
  };

  useEffect(() => {
    getFavoritesWeather();
  }, []);

  return { favoritesWeather, loading };
};

export default useFavoritesWeather;
