import React from 'react';
import styled from 'styled-components';
import Responsive from 'react-responsive';
import ParallaxBox from './Parallax';
import NotParallax from './NotParallax';

const Parallax = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #5ab9bf;
`;

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={992} />;

export default function ParallaxWrap() {
  return (
    <Parallax>
      <Desktop>
        <ParallaxBox />
      </Desktop>
      <Mobile>
        <NotParallax />
      </Mobile>
    </Parallax>
  );
}
