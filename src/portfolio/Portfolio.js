import React from 'react'

import styled from 'styled-components'

import ctw from './assets/ctw.jpg'
import career from './assets/career.png'
import eric from './assets/eric.jpg'
import wav from './assets/wavArt.png'
import hearten from './assets/hearten.png'
import panel from './assets/panel.png'
import pitt from './assets/pitt.png'
import plot from './assets/plotControl.png'
import knj from './assets/knj.png'
import mario from './assets/mario.png'

const Section = styled.div`
  & .slide {
    & .fp-tableCell {
      display: flex;
      width: 100vw !important;
    }
    & .imageSide {
      width: 50%;
      height: 100%;
      overflow: hidden;
      background-color: #5ab9bf;
      position: relative;
      & img {
        width: auto;
        height: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        clip-path: inset(24px 20% 30px 20%);
      }
    }
    & .textSide {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      & h1 {
        font-size: 3.5em;
      }
      & p {
        max-width: 60%;
        text-align: center;
        letter-spacing: 0.1em;
      }
    }
  }
`

export default function AboutMe() {
  return (
    <Section className="section">
      <div className="slide">
        <div className="textSide bg">
          <h1>CTW Development</h1>
          <p>
            2018: Client is a property development and architecture compnay. Fullstack application focused on ease of
            updating.
          </p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript (ES6)</p>
          <p>Fullpage.js</p>
          <p>Greensock animations</p>
          <p>Laravel PHP Backend</p>
        </div>
        <div className="imageSide">
          <img src={ctw} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="imageSide">
          <img src={career} alt="" />
        </div>
        <div className="textSide bg">
          <h1>Career Advantage</h1>
          <p>
            2017: Client is a privately owned career placement firm. Fullstack application focused on the absility to
            add new postings, receive message and applications, and provide instructions for applicants.
          </p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Custom PHP Backend</p>
          <p>Bootstrap 4.0</p>
          <p>WoW Animations</p>
        </div>
      </div>
      <div className="slide">
        <div className="textSide bg">
          <h1>Eric R Lay</h1>
          <p>
            2018: Client is an eSports coach, analyst and entrepreneur. Wordpress application focused on the ability to
            update pictures and videos as well as price and services.
          </p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Wordpress</p>
          <p>Particle.js</p>
          <p>Wordpress Forms</p>
          <p>Twitter Integration</p>
        </div>
        <div className="imageSide">
          <img src={eric} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="imageSide">
          <img src={wav} alt="" />
        </div>
        <div className="textSide bg">
          <h1>WavArt</h1>
          <p>
            2018: Collaborative MERN full stack application. Allows for user registration and authentication. Users
            upload a sound clip or song and application renders a custom art piece from the sound data that can be used
            on social media or as real life art pieces. Project deadline of 12 days.
          </p>
          <p>React JS</p>
          <p>MongoDB</p>
          <p>Express.js</p>
          <p>Node.js</p>
          <p>Styled Components</p>
          <p>Greensock animations</p>
          <p>Canvas Rendering</p>
          <p>React Transition Group</p>
          <p>Axios</p>
          <p>Context State Management</p>
        </div>
      </div>
      <div className="slide">
        <div className="textSide bg">
          <h1>Hearten Design</h1>
          <p>
            2018: MERN Fullstack application designed to aid other students in the design of their projects. Allows
            users to enter a theme or idea for a website or application and returns API results from multiple sources.
            Gives inspiration and references back to the user as well as resources they may use, such as free stock
            photos, that pertain to their custom search. Open source. Project deadline of 10 days.
          </p>
          <p>React JS</p>
          <p>MongoDB</p>
          <p>Express.js</p>
          <p>Node.js</p>
          <p>SASS</p>
          <p>Axios</p>
          <p>Spotify, Behance, DeviantArt, PixaBay, Pexels, DesignQuotes, Pinterest, IconFinder API</p>
          <p>Granim Gradients</p>
        </div>
        <div className="imageSide">
          <img src={hearten} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="imageSide">
          <img src={panel} alt="" />
        </div>
        <div className="textSide bg">
          <h1>Panel Portfolio</h1>
          <p>
            2018: Proof of concept panel based open source portfolio site. Utilizes conditionally based rendering and
            JSON application data. Project had to be completed in 7 days.
          </p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Responsive Design</p>
        </div>
      </div>
      <div className="slide">
        <div className="textSide bg">
          <h1>Pitt OLS Application</h1>
          <p>
            2018: Collaboritive open source fullstack application with over 100 users. The application that drives the
            University of Pittsburgh League of Legends eSports semester long competitive league. Allows for users to
            sign up, captains to draft teams, manages the season, playoffs and stats for all players.
          </p>
          <p>React JS</p>
          <p>HTTP/2</p>
          <p>GraphQL</p>
          <p>Material UI</p>
          <p>SASS</p>
          <p>Context state management</p>
          <p>Motion UI Animations</p>
        </div>
        <div className="imageSide">
          <img src={pitt} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="imageSide">
          <img src={plot} alt="" />
        </div>
        <div className="textSide bg">
          <h1>Plot Control</h1>
          <p>
            2018: Proof of Concept fullstack game based around creating your own home and maintaining your estate.
            Allows for user authentication and managing of their grounds in real time with other players. Features chat
            among players and personal messages. Project had to be completed in 9 days.
          </p>
          <p>React JS</p>
          <p>MongoDB</p>
          <p>Express.js</p>
          <p>Node.js</p>
          <p>SASS</p>
          <p>React Drag n Drop</p>
          <p>Socket.io</p>
          <p>Axios</p>
          <p>Greensock Animation</p>
          <p>Context state management</p>
          <p>Granim Gradients</p>
        </div>
      </div>
      <div className="slide">
        <div className="textSide bg">
          <h1>KnJ Fashion Site Remake</h1>
          <p>
            2018: Assignment requiring a functional remake of an already existing site. Focused on not using code
            written by original author. Originally written in wordpress, I re-wrote the site in React to utilize
            repeatable components to allow for quicker production.
          </p>
          <p>React JS</p>
          <p>SASS</p>
        </div>
        <div className="imageSide">
          <img src={knj} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="imageSide">
          <img src={mario} alt="" />
        </div>
        <div className="textSide bg">
          <h1>Mario Pest Control</h1>
          <p>
            2018: Assignment required creating a form that tallied up the number of 'baddies' Mario defeats and then
            calculates the total billable work. I created a game that would track the users mouse and determine the
            collision on the on screen, randomly generated and randomly wandering enemies. Process is tracked in real
            time and allows for regeneration of more baddies. Features a custom animation in the beginning emulating
            Mario Bros 3 intro scene. Also features many custom CSS Illustrations and animation.
          </p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
        </div>
      </div>
    </Section>
  )
}
