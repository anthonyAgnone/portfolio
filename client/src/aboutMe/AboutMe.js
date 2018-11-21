import React from 'react';
import styled from 'styled-components';

import headshot from './headshot.jpg';

const ContactPage = styled.div`
  overflow: hidden;
  & .image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 1/15;
    grid-row: 1;
    overflow: hidden;
    background-color: #5ab9bf;
    & .hiddenDesktop {
      display: block;
      @media (min-width: 992px) {
        display: none;
      }
    }
    @media (min-width: 992px) {
      grid-row: 1/3;
      grid-column: 1/7;
    }
    & img {
      height: 60%;
      width: auto;
      margin-top: 1em;
      @media (min-width: 992px) {
        width: 100%;
        height: auto;
        margin: 0;
      }
    }
  }
  & .text {
    background-color: rgba(255, 255, 255, 0.3);
    grid-column: 1 / 15;
    overflow: hidden;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    @media (min-width: 992px) {
      grid-row: 1/3;
      grid-column: 7/15;
      background-color: transparent;
      justify-content: center;
    }
    & .hiddenMobile {
      display: none;
      @media (min-width: 992px) {
        display: block;
      }
    }
    & p {
      max-width: 60%;
      text-align: center;
      letter-spacing: 0.1em;
      font-size: 1.3em;
    }
  }
  & .project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 2/14;
    grid-row: 1;
    overflow: hidden;
    @media (min-width: 992px) {
      grid-row: 1/3;
      grid-column: 7/15;
      background-color: #5ab9bf;
    }
    h2 {
      font-weight: 300;
      color: #fff;
      font-weight: 300;
      font-family: 'Julius Sans One', sans-serif;
      padding-top: 1em;
      text-align: center;
    }
  }
  & .description {
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    grid-column: 1/15;
    grid-row: 2;
    @media (min-width: 992px) {
      grid-row: 1/3;
      grid-column: 1/7;
      background-color: transparent;
    }
    & p {
      max-width: 60%;
      text-align: center;
      letter-spacing: 0.1em;
    }
  }
`;

const H1 = styled.h1`
  font-size: 2.5em;
  color: #fff;
  font-weight: 300;
  font-family: 'Julius Sans One', sans-serif;
  padding-top: 1em;
  @media (min-width: 992px) {
    font-size: 3.5em;
  }
`;

export default function AboutMe() {
  return (
    <div className="section active frontWrap">
      <div className="slide">
        <ContactPage className="grid">
          <div className="image">
            <img src={headshot} alt="" />
            <H1 className="hiddenDesktop">Who I am</H1>
          </div>
          <div className="text">
            <H1 className="hiddenMobile">Who I am</H1>
            <p>
              I'm a Pittsburgh native Web Developer and student at the
              University of Pittsburgh for Computer Science. After spending ten
              years in the Navy I left to continue to pursue my dream of making
              an impact in people's lives through development and design. I
              spent three months in Salt Lake City, Utah to complete V School -
              an immersive and intense code boot camp focused on the MERN
              (MongoDB, Express, React, Node) stack and the experience was life
              changing. I've happily returned to Pittsburgh and my two beautiful
              cats (requests for pictures will absolutely be entertained) and
              I'm ready and motivated to make a difference. Web Development is
              my passion. My life. My future.{' '}
            </p>
          </div>
        </ContactPage>
      </div>
      <div className="slide">
        <ContactPage className="grid">
          <div className="project">
            <H1>About this Portfolio</H1>
            <h2>2018: My life's work in less than 50 components.</h2>
          </div>
          <div className="description">
            <p>React</p>
            <p>Express</p>
            <p>MongoDb</p>
            <p>Axios</p>
            <p>Custom Admin / Content Management System</p>
            <p>Greensock Animations</p>
            <p>Styled Components</p>
            <p>React Fullpage</p>
          </div>
        </ContactPage>
      </div>
    </div>
  );
}
