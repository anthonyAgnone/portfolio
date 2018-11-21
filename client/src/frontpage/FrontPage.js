import React from 'react';
import styled from 'styled-components';

import RightSide from './RightSide';

const LandingPage = styled.div`
  overflow: hidden;
  & .leftSide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-column: 2/14;
    grid-row: 1;
    @media (min-width: 992px) {
      grid-row: 1/3;
      grid-column: 1/7;
    }
  }
  & .rightSide {
    background-color: rgba(255, 255, 255, 0.3);
    grid-column: 1 / 15;
    overflow: hidden;
    grid-row: 2;
    @media (min-width: 992px) {
      grid-row: 1/3;
      grid-column: 7/15;
    }
  }
`;

const H1 = styled.h1`
  font-size: 2.5em;
  color: #fff;
  font-weight: 300;
  font-family: 'Julius Sans One', sans-serif;
  @media (min-width: 992px) {
    font-size: 4.5em;
    padding-left: 1em;
  }
`;

export default function FrontPage() {
  return (
    <div className="section active frontWrap">
      <LandingPage className="grid">
        <div className="leftSide">
          <H1>Anthony</H1>
          <H1>Agnone</H1>
        </div>
        <div className="rightSide homeRight">
          <RightSide />
        </div>
      </LandingPage>
    </div>
  );
}
