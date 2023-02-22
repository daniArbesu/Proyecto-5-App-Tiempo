import styled from 'styled-components';

/* eslint-disable react/prop-types */
const CardCityInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: var(--da-section-padding);
  gap: var(--da-gap-city-info);
`;

const CardCityInfoDate = styled.div`
  font-size: var(--da-subtitle);
  line-height: 11px;
`;

function CardCityInfo({ weather }) {
  return (
    <CardCityInfoWrapper>
      <h2>
        {weather.name}, {weather.country}
      </h2>
      <CardCityInfoDate>{weather.date}</CardCityInfoDate>
    </CardCityInfoWrapper>
  );
}

export default CardCityInfo;
