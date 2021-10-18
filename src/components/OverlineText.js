import React from 'react';
import styled from 'styled-components';
export const OverlineText = ({ children }) => {
  return <Text>{children}</Text>;
};

const Text = styled.div`
  font-size: 37px;
  font-weight: bold;
  color: #5349ab;
  margin-bottom: 1rem;
`;
