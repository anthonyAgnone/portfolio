import React, { Component } from 'react'
import { withGranim } from '../context/GranimContext'

class GranimComponent extends Component {
  componentDidMount() {
    this.props.handleSetGranim({
      direction: 'top-bottom',
      element: '#granim-canvas',
      opacity: [1, 1],
      states: {
        'default-state': {
          gradients: [['#6fbae5', '#dfebea'], ['#6ab6f4', '#dfebea'], ['#dfebea', '#6ab6f4'], ['#dfebea', '#9c30ca']],
          transitionSpeed: 18000
        },
        'slide-two': {
          gradients: [
            ['#393E46', '#00ADB5'],
            ['#00ADB5', '#FFF4E0'],
            ['#FFF4E0', '#F8B500'],
            ['#F8B500', '#FC3C3C'],
            ['#FC3C3C', '#393E46']
          ],
          transitionSpeed: 10000
        },
        'slide-three': {
          gradients: [['#6ff7cc', '#8d285e'], ['#86305d', '#fc5502'], ['#fc5502', '#86305d'], ['#86305d', '#6ff7cc']],
          transitionSpeed: 21000
        },
        'slide-four': {
          gradients: [
            ['#EF4666', '#F69B9A'],
            ['#F69B9A', '#FBCEAE'],
            ['#FBCEAE', '#C7C8A9'],
            ['#C7C8A9', '##84AF9C'],
            ['#84AF9C', '#EF4666']
          ],
          transitionSpeed: 10000
        }
      }
    })
  }

  render() {
    const style = {
      gradient: {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1
      }
    }
    return (
      <div className="pageWrapper">
        <canvas id="granim-canvas" ref={this.props.genRef} style={style.gradient} />
        {this.props.children}
      </div>
    )
  }
}
export default withGranim(GranimComponent)
