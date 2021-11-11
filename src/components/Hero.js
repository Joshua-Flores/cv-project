import React from 'react';
import styled from 'styled-components';

const AppName = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
`;

const Tagline = styled.p`
  font-size: 16px;
  text-align: center;
`;

export default function Hero() {
  return (
    <div>
      <AppName>Resume Builder</AppName>
      <Tagline>
        Making a good-looking resume is a pain. Let's make it a little easier.
      </Tagline>
    </div>
  );
}
