/* eslint-disable react/prop-types */
import styled from 'styled-components';

const ExtraCard = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 11px;

  background: rgba(255, 255, 255, 0.36);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 0.5rem;
`;

function CardWeatherExtra({ children }) {
  return <ExtraCard>{children}</ExtraCard>;
}

export default CardWeatherExtra;
