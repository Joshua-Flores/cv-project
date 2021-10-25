import React from 'react';
import { ReactFitty } from 'react-fitty';
import styled from 'styled-components';

const Name = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  display: block;
  margin-bottom: 0px;
  line-height: 1;
`;

const Profession = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  background-color: ${(props) => (props.color ? props.color : 'green')};
  font-size: 20px;
  padding: 4px 16px 4px 32px;
  margin: auto auto auto -32px;
`;

export default function Title({ name, profession, accentColor }) {
  console.log(accentColor);
  return (
    <div>
      <ReactFitty maxSize="64">
        <Name>{name ? name : 'Antonella Blake'}</Name>
      </ReactFitty>

      <Profession color={accentColor.hex}>
        {profession ? profession : 'magician'}
      </Profession>
    </div>
  );
}
