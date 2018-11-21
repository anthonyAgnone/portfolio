import React, { Component } from 'react';
import styled from 'styled-components';

import ginger from './ginger.png';

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
    @media (min-width: 992px) {
      grid-row: 1/3;
      grid-column: 7/15;
      background-color: #5ab9bf;
    }
    & img {
      height: 100%;
      width: auto;
      margin-top: 1em;
    }
  }
  & .form {
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
      grid-column: 1/7;
      background-color: transparent;
    }
    & form {
      height: 80%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      @media (min-width: 992px) {
        height: 50%;
      }
    }
    & input {
      width: 70%;
      border: none;
      border-bottom: 2px solid #fff;
      background-color: transparent;
      color: #fff;
      padding-left: 0.5em;
      transition: all 0.3s ease;
      &:focus {
        width: 80%;
      }
    }
    & button {
      border: none;
      background: transparent;
      color: #fff;
      border: 2px solid #fff;
      padding: 0.5em 1em;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        background: #fff;
        color: #59bac0;
      }
    }
  }
`;

const H1 = styled.h1`
  font-size: 2.5em;
  color: #fff;
  font-weight: 300;
  font-family: 'Julius Sans One', sans-serif;
  padding-top: 1em;
`;

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      organization: '',
      email: '',
      inquery: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    const { name, orgnaization, email, inquery } = this.state;
    e.preventDefault();
    console.log(name, orgnaization, email, inquery);
  }

  render() {
    return (
      <div className="section">
        <ContactPage className="grid">
          <div className="image">
            <img src={ginger} alt="" />
          </div>
          <div className="form">
            <H1>Hello World</H1>
            <form className="rightSide" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="orgnaization"
                placeholder="Organization"
                value={this.state.orgnaization}
                onChange={this.handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="inquery"
                placeholder="Inquery"
                value={this.state.inquery}
                onChange={this.handleChange}
              />
              <button>Reach Out</button>
            </form>
          </div>
        </ContactPage>
      </div>
    );
  }
}
