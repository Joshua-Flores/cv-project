import React from 'react';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListContainer = styled.ul`
  padding-left: 0px;
`;

const ListItem = styled.li`
  list-style-type: none;
  margin-bottom: 4px;

  svg {
    margin-right: 8px;
  }
`;

export default function Contact({ email, phone, location }) {
  return (
    <ListContainer>
      <ListItem>
        <FontAwesomeIcon icon={faEnvelope} />
        {email ? email : 'Antonella.Blake@email.com'}
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faPhoneAlt} />
        {phone ? phone : '213-555-5555'}
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        {location ? location : 'Southern California'}
      </ListItem>
    </ListContainer>
  );
}
