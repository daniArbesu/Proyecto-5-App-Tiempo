/* eslint-disable react/prop-types */
import styled from 'styled-components';

const WeatherExtraWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--da-section-padding);
  gap: var(--da-gap-extra-card);
`;

function ExtraCardWrapper({ children }) {
  return <WeatherExtraWrapper>{children}</WeatherExtraWrapper>;
}

export default ExtraCardWrapper;
