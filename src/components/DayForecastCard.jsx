import styled from 'styled-components';
import CardWeatherExtra from './ui/CardWeatherExtra';

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const CardRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardTemperature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* eslint-disable react/prop-types */
function DayForecastCard({ weather }) {
  return (
    <CardWeatherExtra>
      <CardLeft>
        <h3>{weather.date}</h3>
        <p>{weather.description}</p>
      </CardLeft>
      <CardRight>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="" />
        <CardTemperature>
          <p>{weather.day_temp} º</p>
          <p>{weather.night_temp} º</p>
        </CardTemperature>
      </CardRight>
    </CardWeatherExtra>
  );
}

export default DayForecastCard;
