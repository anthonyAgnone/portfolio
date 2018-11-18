import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import App from '../App'
import { withGranim } from '../context/GranimContext'
import { withAnimationContext } from '../context/AnimationContext'

const fullpageOptions = {
  anchors: ['portfolio', 'home', 'about', 'contact'],
  callbacks: ['onLeave'],
  licenseKey: '6A73F4EE-524245AF-8CFE9E57-0D099183',
  slidesNavigation: true,
  loopHorizontal: true,
  responsiveWidth: 800,
  menu: '#navigation',
  fixedElements: '#navigation'
}

const FullpageWrapper = props => (
  <ReactFullpage
    {...fullpageOptions}
    onLeave={(origin, destination, direction) => {
      console.log('onLeave event', { origin, destination, direction })
      if (origin.index === 1 && destination.index === 0) {
        props.animateNavBarOut()
        props.handleChangeState('slide-two')
      } else if (origin.index === 1 && destination.index === 2) {
        props.animateNavBarOut()
        props.handleChangeState('slide-three')
      } else if (origin.index === 0 && destination.index === 1) {
        props.animateNavBarIn()
        props.handleChangeState('default-state')
      } else if (origin.index === 2 && destination.index === 1) {
        props.animateNavBarIn()
        props.handleChangeState('default-state')
      } else if (origin.index === 2 && destination.index === 3) {
        props.handleChangeState('slide-four')
      } else if (origin.index === 3 && destination.index === 2) {
        props.handleChangeState('slide-three')
      }
    }}
    render={({ state, fullpageApi }) => {
      return (
        <div id="fullpage-wrapper">
          <App />
        </div>
      )
    }}
  />
)

export default withAnimationContext(withGranim(FullpageWrapper))
