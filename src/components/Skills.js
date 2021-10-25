import React from 'react';
import styled from 'styled-components';

const SkillList = styled.ul`
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`;

const SkillLi = styled.li`
  list-style-type: none;
  background-color: ${(props) => (props.color ? props.color : 'green')};
  padding: 4px 8px;
  margin: 0px 8px 8px 0px;
  border-radius: 4px;
`;

export default function SectionHeading({ skills, accentColor }) {
  let skillItems = [];

  if (skills.length > 0) {
    skillItems = skills.split(',');
  } else {
    skillItems = [
      'card tricks',
      'escape',
      'vanishing',
      'transportation',
      'levitation',
    ];
  }

  return (
    <SkillList>
      {skillItems.map(
        (skill) =>
          skill.trim().length > 0 && (
            <SkillLi color={accentColor.hex} key={skill}>
              {skill}
            </SkillLi>
          )
      )}
    </SkillList>
  );
}
