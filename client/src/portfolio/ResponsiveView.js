import React, { Component } from 'react';
import styled from 'styled-components';

const positionX = [0, '50%'];
const positionY = [0, '50%'];
const Device = styled.div`
  width: 50%;
  height: 50%;
  position: absolute;
  top: ${props => positionY[props.y]};
  left: ${props => positionX[props.x]};
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  & .image {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 30;
    width: 100%;
    height: auto;
  }
  & .wrapper {
    width: 100%;
    height: 100%;
    z-index: 50;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

class ResponsiveView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    if (this.state.expanded) {
      this.setState(prevState => ({
        expanded: !prevState.expanded
      }));
    } else {
      this.setState(prevState => ({
        expanded: !prevState.expanded
      }));
    }
  }

  render() {
    const style = {
      extended: {
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 200
      },
      mobile: {
        width: '34%',
        height: '52%',
        overflowX: 'hidden',
        overflowY: this.state.expanded ? 'scroll' : 'hidden',
        position: 'absolute',
        top: '22%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        zIndex: 199
      },
      tablet: {
        width: '45%',
        height: '58%',
        overflowX: 'hidden',
        overflowY: this.state.expanded ? 'scroll' : 'hidden',
        position: 'absolute',
        top: '21%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        zIndex: 199
      },
      laptop: {
        width: '60%',
        height: '39%',
        overflowX: 'hidden',
        overflowY: this.state.expanded ? 'scroll' : 'hidden',
        position: 'absolute',
        top: '31%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        zIndex: 199
      },
      desktop: {
        width: '68%',
        height: '39%',
        overflowX: 'hidden',
        overflowY: this.state.expanded ? 'scroll' : 'hidden',
        position: 'absolute',
        top: '25%',
        left: '51%',
        transform: 'translate(-50%, 0)',
        zIndex: 199
      }
    };
    const { wrapper, image, x, y, type } = this.props;
    return (
      <Device
        x={x}
        y={y}
        style={this.state.expanded ? style.extended : null}
        onClick={() => this.handleExpand()}
      >
        <div className="imageContainer" style={style[type]}>
          <img className="image" src={image} alt="" />
        </div>
        <img className="wrapper" src={wrapper} alt="" />
      </Device>
    );
  }
}

export default ResponsiveView;
