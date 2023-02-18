/* eslint-disable react/prop-types */
import styled from 'styled-components';

const ExtraCard = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;

  background: rgba(255, 255, 255, 0.36);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 0.5rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CityName = styled.h3`
  font-size: 1.25rem;
`;

const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const Temperature = styled.p`
  font-weight: 700;
  font-size: 43px;
  line-height: 52px;
`;

const DegreeSign = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
`;

function FavoritesCard({ name, temperature, icon }) {
  return (
    <ExtraCard>
      <Left>
        <CityName>{name}</CityName>
        <TemperatureWrapper>
          <Temperature>{temperature || '-'}</Temperature>
          <DegreeSign>º</DegreeSign>
        </TemperatureWrapper>
      </Left>
      <img src={icon} alt={name} />
    </ExtraCard>
  );
}

export default FavoritesCard;
