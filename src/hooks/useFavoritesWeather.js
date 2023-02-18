import { useEffect, useState } from 'react';
import { getWeatherDataFromLocation } from '../api/weather';

const useFavoritesWeather = (favorites) => {
  const [favoritesWeather, setFavoritesWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFavoritesWeather = async () => {
    setLoading(true);
    const favoritesApiWeather = await Promise.all(
      favorites.map((favoriteLocation) => {
        try {
          return getWeatherDataFromLocation(favoriteLocation.location);
        } catch {
          throw new Error('Something went wrong fecthing Favorites Weather Data');
        }
      })
    );
    setFavoritesWeather(favoritesApiWeather);
    setLoading(false);
  };

  useEffect(() => {
    getFavoritesWeather();
  }, []);

  return { favoritesWeather, loading };
};

export default useFavoritesWeather;
