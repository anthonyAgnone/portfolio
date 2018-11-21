import React from 'react';
import styled from 'styled-components';
import background from './assets/backgroundParallax.png';
import foreground from './assets/foregroundParallax.png';

const NotWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: auto;
    height: 100%;
  }
`;

export default () => {
  return (
    <NotWrap>
      <img src={background} alt="" />
      <img src={foreground} alt="" />
    </NotWrap>
  );
};
