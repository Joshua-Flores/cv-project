import React from 'react';
import styled from 'styled-components';

const Summary = styled.p``;

export default function Title({ summary }) {
  return (
    <div>
      <Summary>
        {summary
          ? summary
          : "I am a magician based out of Southern California with over ten years experience in the highly exclusive SoCal magic scene. When I'm on stage audiences get lost in the mystery of my craft."}
      </Summary>
    </div>
  );
}
