import React from 'react'
import Contact from './contact/Contact'
import AboutMe from './aboutMe/AboutMe'
import FrontPage from './frontpage/FrontPage'
import Portfolio from './portfolio/Portfolio'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Archivo Narrow', serif;
  }
  .fp-slidesNav ul {
    width: 50%;
    display: flex;
    justify-content: center;
    & li {
      margin-right: 1em;
    }
    & li a span {
    background: #fff;
  }
  }
`

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Portfolio />
      <FrontPage />
      <AboutMe />
      <Contact />
    </div>
  )
}
