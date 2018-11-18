import React from 'react';
import styled from 'styled-components';
import wrapper from './assets/wrapper.png';

const WrapperDiv = styled.div`
  width: 100%;
  height: 100%;
  & .child {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    height: auto;
    background-image: url(${props => props.image});
  }
`;

export const wrapHoc = C => props => (
  <WrapperDiv image={props.bg} className="responsive-wrapper">
    <C className="child" {...props} />
    <img src={wrapper} alt="" />
  </WrapperDiv>
);
