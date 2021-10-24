import React from 'react';
import styled from 'styled-components';

const Heading = styled.span`
  display: block;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 20px;
  margin: 8px auto 8px auto;
`;

export default function SectionHeading({ title }) {
  return <Heading>{title}</Heading>;
}
