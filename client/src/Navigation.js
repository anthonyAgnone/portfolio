import React from 'react';
import styled from 'styled-components';
import Responsive from 'react-responsive';

import { withAnimationContext } from './context/AnimationContext';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={991} />;

const NavBarDesktop = styled.div`
  width: 35%;
  position: fixed;
  top: 75vh;
  left: 20vw;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  & a {
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    font-size: 1.3em;
  }
`;

const NavBarMobile = styled.div`
  width: 100vw;
  position: fixed;
  top: 40vh;
  height: 5vh;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  a {
    color: #fff;
    font-weight: bold;
  }
`;

function Navigation({ navBar }) {
  return (
    <nav>
      <Desktop>
        <NavBarDesktop id="navigation" ref={navBar}>
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
        </NavBarDesktop>
      </Desktop>
      <Mobile>
        <NavBarMobile id="navigation" ref={navBar}>
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
        </NavBarMobile>
      </Mobile>
    </nav>
  );
}

export default withAnimationContext(Navigation);
