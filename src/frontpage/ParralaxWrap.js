import React from 'react'
import styled from 'styled-components'
import background from './assets/backgroundParallax.png'
import foreground from './assets/foregroundParallax.png'
import ParallaxMousemove from 'react-parallax-mousemove'

const Parralax = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  background-color: #5ab9bf;
`

const style = {
  outer: {
    height: '100%',
    width: '100%'
  },
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    overflow: 'hidden'
  },
  box1: {
    zIndex: 1,
    top: 0,
    width: '50vw',
    height: '100vh',
    position: 'absolute'
  },
  box2: {
    zIndex: 2,
    top: 0,
    width: '50vw',
    height: '100%',
    position: 'absolute'
  },
  img: {
    height: '100%',
    width: '100%'
  },
  img2: {
    height: '130vh',
    width: '65vw'
  }
}

export default function ParralaxWrap() {
  return (
    <Parralax className="image-right">
      <ParallaxMousemove containerStyle={style.outer}>
        <ParallaxMousemove.Layer
          layerStyle={style.box1}
          config={{
            xFactor: 0.02,
            yFactor: 0.02,
            springSettings: {
              stiffness: 3,
              damping: 5
            }
          }}>
          <img src={background} alt="Parallax Layer" style={style.img2} />
        </ParallaxMousemove.Layer>
        <ParallaxMousemove.Layer
          layerStyle={style.box2}
          config={{
            xFactor: 0.1,
            yFactor: 0.3,
            springSettings: {
              stiffness: 73,
              damping: 15
            }
          }}>
          <img src={foreground} alt="Parallax Layer" style={style.img} />
        </ParallaxMousemove.Layer>
      </ParallaxMousemove>
    </Parralax>
  )
}
