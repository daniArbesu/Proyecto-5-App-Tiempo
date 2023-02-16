/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import styled from 'styled-components';

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--da-color-primary-light);
  color: var(--da-color-primary-dark);
  box-shadow: var(--da-box-shadow-card);
  border-radius: var(--da-radius-card);
  background: var(--da-color-glass-effect);
  border: var(--da-border-card);
  backdrop-filter: var(--da-backdrop-filter-card);
  gap: 16px;
  padding: 16px;
  width: 100vw;

  @media screen and (min-width: 500px) {
    width: 400px;
  }
`;

function Layout({ children }) {
  return <CardWrapper>{children}</CardWrapper>;
}

export default Layout;
