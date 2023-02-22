/* eslint-disable react/prop-types */
import styled from 'styled-components';
import extrasLogosSVGPaths from '../constants/weather';

const CardWeatherExtraCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--da-extra-card-padding);

  background: var(--da-color-glass-effect);
  border: var(--da-border-extra-card);
  border-radius: var(--da-radius-search-bar);
  font-weight: 400;
  font-size: var(--da-subtitle-small);
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--da-gap-extra-card);
`;

const Right = styled.div`
  padding-right: 1.0625rem;
`;

const IconWrapper = styled.div`
  background: var(--da-color-primary-light);
  box-shadow: var(--da-icon-shadow-card);
  border-radius: var(--da-radius-button);
  padding: 0.3rem;
`;

const Icon = styled.svg`
  width: var(--da-size-svg);
  color: var(--da-color-logos);
  fill: var(--da-color-logos);
`;

function WeatherExtrasCard({ weatherInfo, weather }) {
  const cardTitle = extrasLogosSVGPaths[weatherInfo].title;
  const logoPath = extrasLogosSVGPaths[weatherInfo].path;
  const weatherUnits = extrasLogosSVGPaths[weatherInfo].units;

  if (!weather) {
    return null;
  }

  return (
    <CardWeatherExtraCard>
      <Left>
        <IconWrapper>
          <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d={logoPath} />
          </Icon>
        </IconWrapper>
        <p>{cardTitle} </p>
      </Left>
      <Right>
        <p>
          {weather} {weatherUnits}
        </p>
      </Right>
    </CardWeatherExtraCard>
  );
}

export default WeatherExtrasCard;
