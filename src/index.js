import React from 'react'
import ReactDOM from 'react-dom'
import GranimContext from './context/GranimContext'
import AnimationContext from './context/AnimationContext'
import GranimComponent from './utility/GranimComponent'
import FullpageWrapper from './utility/FullpageWrapper'
import Reboot from './utility/Reboot'
import Navigation from './Navigation'

ReactDOM.render(
  <Reboot>
    <AnimationContext>
      <GranimContext>
        <GranimComponent>
          <Navigation />
          <FullpageWrapper />
        </GranimComponent>
      </GranimContext>
    </AnimationContext>
  </Reboot>,
  document.getElementById('root')
)
