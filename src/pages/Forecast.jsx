/* eslint-disable react/prop-types */
import { Link, useParams } from 'react-router-dom';
import Layout from '../components/ui/Layout';
import DayForecastCard from '../components/DayForecastCard';
import useForecastWeather from '../hooks/useForecastWeather';
import useGeolocation from '../hooks/useGeolocation';
import favoriteLocations from '../constants/location';
import LinkWrapper from '../components/ui/LinkWrapper';

function Forecast() {
  const { cityIndex } = useParams();
  const { location } = useGeolocation();
  const selectedLocation = cityIndex ? favoriteLocations[cityIndex].location : location;
  const backLink = cityIndex ? `/favorites/${cityIndex}` : '/';

  const { weather, loading } = useForecastWeather(selectedLocation);

  return (
    <Layout>
      {loading ? (
        <h2>Recovering Forecast Data</h2>
      ) : (
        <>
          <h2>
            {weather[0]?.name}, {weather[0]?.country}
          </h2>
          {weather?.map((dayWeather) => {
            return <DayForecastCard weather={dayWeather} key={dayWeather.date} />;
          })}
        </>
      )}
      <LinkWrapper>
        <Link to={backLink}>← Back to Day Weather</Link>
      </LinkWrapper>
    </Layout>
  );
}

export default Forecast;
