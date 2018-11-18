import React from 'react'
import styled from 'styled-components'

import { withAnimationContext } from './context/AnimationContext'

const NavBar = styled.div`
  width: 40%;
  position: fixed;
  top: 75vh;
  left: 25vw;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  & a {
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    font-size: 1.3em;
  }
`

function Navigation({ navBar }) {
  return (
    <NavBar id="navigation" ref={navBar}>
      <a href="#home">Home</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#about">About Me</a>
      <a href="#contact">Contact</a>
    </NavBar>
  )
}

export default withAnimationContext(Navigation)
