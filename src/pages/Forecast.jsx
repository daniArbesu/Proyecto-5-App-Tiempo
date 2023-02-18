/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Layout from './Layout';
import DayForecastCard from '../components/DayForecastCard';
import useForecastWeather from '../hooks/useForecastWeather';

function Forecast({ location }) {
  const { weather, loading } = useForecastWeather(location);

  return (
    <Layout>
      {loading ? (
        <h2>Recovering Forecast Data</h2>
      ) : (
        <>
          <h2>
            {weather[0].name}, {weather[0].country}
          </h2>
          {weather.map((dayWeather) => {
            return <DayForecastCard weather={dayWeather} key={dayWeather.date} />;
          })}
        </>
      )}
      <Link to="/">← Back to Day Weather</Link>
    </Layout>
  );
}

export default Forecast;
