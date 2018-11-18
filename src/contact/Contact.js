import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      organization: '',
      email: '',
      inquery: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    const { name, orgnaization, email, inquery } = this.state
    e.preventDefault()
    console.log(name, orgnaization, email, inquery)
  }

  render() {
    return (
      <div className="section">
        <div className="leftSide">
          <h1>Left Side</h1>
        </div>
        <form className="rightSide" onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
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
    )
  }
}
