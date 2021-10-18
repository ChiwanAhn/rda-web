import React from 'react';
import styled from 'styled-components';

export const SectionTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

const Title = styled.h2`
  text-align: center;
  padding: 0 1rem;
  font-size: 65px;
  font-weight: 800;
`;
