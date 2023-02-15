/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import styled from 'styled-components';

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--da-color-primary-light);
  color: var(--da-color-primary-dark);
  box-shadow: 0px 6px 40px var(--da-color-shadow);
  border-radius: var(--da-radius-card);
  background: var(--da-color-glass-effect);
  border: 6px solid var(--da-color-primary-light);
  backdrop-filter: blur(5px);
`;

function Layout({ children }) {
  return <CardWrapper>{children}</CardWrapper>;
}

export default Layout;
