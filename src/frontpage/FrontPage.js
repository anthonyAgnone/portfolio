import React from 'react'
import styled from 'styled-components'

import ParralaxWrap from './ParralaxWrap'

const LandingPage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  & .leftSide {
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & .rightSide {
    width: 50vw;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
  }
`

const H1 = styled.h1`
  font-size: 5.5em;
  color: #fff;
  font-weight: 300;
  font-family: 'Julius Sans One', sans-serif;
  width: 50%;
  padding: 0 0 0 1em;
  margin: 0 0 14px 0;
`

export default function FrontPage() {
  return (
    <div className="section active frontWrap">
      <LandingPage>
        <div className="leftSide">
          <H1>Anthony</H1>
          <H1>Agnone</H1>
        </div>
        <div className="rightSide homeRight">
          <ParralaxWrap />
        </div>
      </LandingPage>
    </div>
  )
}
