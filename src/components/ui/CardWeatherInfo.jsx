/* eslint-disable react/prop-types */
import styled from 'styled-components';

const CardWeatherInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: var(--da-section-padding);
`;

const WeatherDescription = styled.div`
  font-weight: 400;
  font-size: var(--da-subtitle);
  line-height: var(--da-subtitle-leading);
`;

const TemperatureInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-weight: 300;
  font-size: var(--da-subtitle-small);
  line-height: 15px;
`;

const DayNightTempWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const CurrentTempWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Temperature = styled.div`
  font-weight: 700;
  font-size: var(--da-temperature-value);
  line-height: 52px;
`;

const DegreeSign = styled.div`
  font-weight: 300;
  font-size: var(--da-subtitle-small);
  line-height: 15px;
`;

function CardWeatherInfo({ weather }) {
  const iconSrc = weather ? `http://openweathermap.org/img/wn/${weather.icon}.png` : '';

  return (
    <CardWeatherInfoWrapper>
      <WeatherDescription>
        <img src={iconSrc} alt={weather.description} />
        <p>{weather.description}</p>
      </WeatherDescription>
      <TemperatureInfoWrapper>
        <DayNightTempWrapper>
          <p>Day {weather.day_temp}º ⬆</p>
          <p>Night {weather.night_temp}º ⬇</p>
        </DayNightTempWrapper>
        <CurrentTempWrapper>
          <Temperature>
            <p>{weather.temperature}</p>
          </Temperature>
          <DegreeSign>
            <p>ºC</p>
          </DegreeSign>
        </CurrentTempWrapper>
        <p>Feels like {weather.feels_like} º</p>
      </TemperatureInfoWrapper>
    </CardWeatherInfoWrapper>
  );
}

export default CardWeatherInfo;
