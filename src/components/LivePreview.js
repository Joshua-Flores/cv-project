import React from 'react';
import Title from './Title';
import Contact from './Contact';
import Summary from './Summary';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import Skills from './Skills';
import FreeText from './FreeText';

const Paper = styled.div`
  border: 1px solid hsl(0, 0%, 90%);
  padding: 32px;
  background-color: white;
  width: 100%;
  margin-bottom: 16px;
`;

const HeadingBlock = styled.div`
  padding: 16px 0 32px 0;
`;

const Block = styled.div`
  border-top: 6px solid #1b1b1b;
  padding-bottom: 32px;
  height: 100%;
`;

export default function LivePreview({ state }) {
  return (
    <div>
      <Paper>
        <div className="row">
          <div className="col-md-8">
            <HeadingBlock>
              <Title
                name={state.name}
                profession={state.profession}
                accentColor={state.accentColor}
              />
            </HeadingBlock>
          </div>
          <div className="col-md-4">
            <HeadingBlock>
              <Contact
                email={state.email}
                location={state.location}
                phone={state.phone}
              ></Contact>
            </HeadingBlock>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Block>
              <SectionHeading title="About me" />
              <Summary summary={state.summary} />
            </Block>
          </div>
          <div className="col-md-4">
            <Block>
              <SectionHeading title="Skills" />
              <Skills skills={state.skills} accentColor={state.accentColor} />
            </Block>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Block>
              <SectionHeading title="Work Experience" />
              <FreeText content={state.experience} />
            </Block>
          </div>
          <div className="col-md-4">
            <Block>
              <SectionHeading title="Education" />
              <FreeText content={state.education} />
            </Block>
          </div>
        </div>
      </Paper>
    </div>
  );
}
