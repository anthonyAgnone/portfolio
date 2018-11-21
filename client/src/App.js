import React from 'react';
import Contact from './contact/Contact';
import AboutMe from './aboutMe/AboutMe';
import FrontPage from './frontpage/FrontPage';
import Portfolio from './portfolio/Portfolio';
import { createGlobalStyle } from 'styled-components';

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
  .grid {
    height: 100vh;
    display: grid;
    grid-template-columns: minmax(20px, 1fr) repeat(12, minmax(auto, calc((1200px - (11 * 10px)) / 12))) minmax(20px, 1fr);
    grid-gap: 10px;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Portfolio />
      <FrontPage />
      <AboutMe />
      <Contact />
    </div>
  );
}
