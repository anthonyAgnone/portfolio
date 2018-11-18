import React, { createContext, Component } from 'react'
import Granim from 'granim'
const { Provider, Consumer } = createContext()

export default class GranimContext extends Component {
  constructor(props) {
    super(props)
    this.genCanvasRef = el => (this.canvasRef = el)
    this.state = {
      granim: null
    }

    this.handleChangeState = this.handleChangeState.bind(this)
    this.handleSetGranim = this.handleSetGranim.bind(this)
  }

  handleChangeState(gradientState) {
    this.state.granim.changeState(gradientState)
  }

  handleSetGranim(granimState) {
    this.setState({
      granim: new Granim(granimState)
    })
  }

  render() {
    const props = {
      handleChangeState: this.handleChangeState,
      genCanvasRef: this.genCanvasRef,
      handleSetGranim: this.handleSetGranim,
      ...this.state
    }
    return <Provider value={props}>{this.props.children}</Provider>
  }
}

export const withGranim = C => props => <Consumer>{value => <C {...value} {...props} />}</Consumer>
