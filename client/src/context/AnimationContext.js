import React, { Component, createContext, createRef } from 'react';
import { TweenLite, Power4 } from 'gsap';

const { Consumer, Provider } = createContext();

export default class AnimationContext extends Component {
  constructor(props) {
    super(props);

    this.navBarAnimationOut = null;
    this.navBarAnimationIn = null;
    this.navBar = createRef();
    this.animateNavBarOut = this.animateNavBarOut.bind(this);
    this.animateNavBarIn = this.animateNavBarIn.bind(this);
    this.img = createRef();
    this.animateImgIn = this.animateImgIn.bind(this);
    this.animateImg = null;
  }

  animateImgIn() {
    if (window.innerWidth > 991) {
      this.animateImg = TweenLite.from(this.img.current, 0.3, {
        css: { transform: 'translate(0)' }
      });
    }
  }

  animateNavBarOut() {
    if (window.innerWidth > 991) {
      this.navBarAnimationOut = TweenLite.to(this.navBar.current, 0.9, {
        css: { top: '2vh', paddingTop: '.5em', width: '30%' },
        ease: Power4.easeInOut
      });
    } else {
      this.navBarAnimationOut = TweenLite.to(this.navBar.current, 0.3, {
        css: { top: '0', paddingTop: '.5em', width: '100%' },
        ease: Power4.easeInOut
      });
    }
  }

  animateNavBarIn() {
    if (window.innerWidth > 991) {
      this.navBarAnimationIn = TweenLite.to(this.navBar.current, 0.9, {
        css: { top: '75vh', paddingTop: 0, width: '35%' },
        ease: Power4.easeInOut
      });
    } else {
      this.navBarAnimationIn = TweenLite.to(this.navBar.current, 0.3, {
        css: { top: '40vh', paddingTop: 0, width: '100%' },
        ease: Power4.easeInOut
      });
    }
  }

  render() {
    const value = {
      navBar: this.navBar,
      img: this.img,
      animateNavBarOut: this.animateNavBarOut,
      animateNavBarIn: this.animateNavBarIn,
      animateImgIn: this.animateImgIn,
      ...this.state
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export const withAnimationContext = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
