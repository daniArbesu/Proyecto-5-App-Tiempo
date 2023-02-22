/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: var(--da-card-header-padding);
  text-align: left;
`;

function LinkWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default LinkWrapper;
