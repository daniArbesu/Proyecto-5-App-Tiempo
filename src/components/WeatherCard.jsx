/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from './ui/Layout';
import SearchBar from './SearchBar';
import CardCityInfo from './ui/CardCityInfo';
import WeatherExtrasCard from './WeatherExtrasCard';
import CardWeatherInfo from './ui/CardWeatherInfo';
import ExtraCardWrapper from './ui/ExtraCardWrapper';
import LinkWrapper from './ui/LinkWrapper';

const CardHeader = styled.header`
  padding: var(--da-card-header-padding);
`;

function WeatherCard({ weather, link }) {
  return (
    <Layout>
      <CardHeader>
        <Link to="/favorites">
          <SearchBar />
        </Link>
      </CardHeader>
      <article>
        <CardCityInfo weather={weather} />
        <CardWeatherInfo weather={weather} />
        <ExtraCardWrapper>
          <WeatherExtrasCard weatherInfo="rain" weather={weather.rain} />
          <WeatherExtrasCard weatherInfo="wind" weather={weather.wind} />
          <WeatherExtrasCard weatherInfo="humidity" weather={weather.humidity} />
          <WeatherExtrasCard weatherInfo="visibility" weather={weather.visibility} />
          <WeatherExtrasCard weatherInfo="clouds" weather={weather.clouds} />
          <WeatherExtrasCard weatherInfo="snow" weather={weather.snow} />
        </ExtraCardWrapper>
        <LinkWrapper>
          <Link to={link}>5-day forecast →</Link>
        </LinkWrapper>
      </article>
    </Layout>
  );
}

function Weather({ weather, link }) {
  return weather ? (
    <WeatherCard weather={weather} link={link} />
  ) : (
    <h2>We couldn&apos;t find your location</h2>
  );
}

export default Weather;
