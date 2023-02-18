import { Link } from 'react-router-dom';
import Layout from './Layout';
import favoriteLocations from '../constants/location';
import FavoritesCard from '../components/ui/FavoritesCard';
import useFavoritesWeather from '../hooks/useFavoritesWeather';

function Favorites() {
  const { weather, loading } = useFavoritesWeather(favoriteLocations);

  return (
    <Layout>
      <h2>Locations</h2>
      {loading ? (
        <h2>Loading Weather data</h2>
      ) : (
        weather?.map((locationWeather) => {
          return (
            <FavoritesCard
              name={locationWeather.name}
              temperature={locationWeather.day_temp}
              key={locationWeather.name}
            />
          );
        })
      )}
      <Link to="/">⬅️ Back to Day Weather</Link>
    </Layout>
  );
}

export default Favorites;
