import React from 'react';
import ResponsiveView from './ResponsiveView';
import styled from 'styled-components';
import mobile from './assets/mobile.png';
import tablet from './assets/tablet.png';
import laptop from './assets/laptop.png';
import desktop from './assets/desktop.png';

import mobileCA from './assets/mobileCA.png';
import tabletCA from './assets/tabletCA.png';
import laptopCA from './assets/laptopCA.png';
import desktopCA from './assets/desktopCA.png';

import mobileCTW from './assets/mobileCTW.png';
import tabletCTW from './assets/tabletCTW.jpg';
import laptopCTW from './assets/laptopCTW.png';
import desktopCTW from './assets/desktopCTW.png';

import mobileWAV from './assets/mobileWAV.jpg';
import tabletWAV from './assets/tabletWAV.jpg';
import laptopWAV from './assets/laptopWAV.png';
import desktopWAV from './assets/desktopWAV.png';

import mobileERC from './assets/mobileERC.png';
import tabletERC from './assets/tabletERC.png';
import laptopERC from './assets/laptopERC.jpg';
import desktopERC from './assets/desktopERC.jpg';

import mobileHRT from './assets/mobileHRT.png';
import tabletHRT from './assets/tabletHRT.png';
import laptopHRT from './assets/laptopHRT.png';
import desktopHRT from './assets/desktopHRT.png';

import mobilePP from './assets/mobilePP.png';
import tabletPP from './assets/tabletPP.png';
import laptopPP from './assets/laptopPP.png';
import desktopPP from './assets/desktopPP.png';

import mobilePitt from './assets/mobilePitt.png';
import tabletPitt from './assets/tabletPitt.png';
import laptopPitt from './assets/laptopPitt.png';
import desktopPitt from './assets/desktopPitt.png';

import mobilePC from './assets/mobilePC.png';
import tabletPC from './assets/tabletPC.png';
import laptopPC from './assets/laptopPC.png';
import desktopPC from './assets/desktopPC.png';

import mobileKJ from './assets/mobileKJ.png';
import tabletKJ from './assets/tabletKJ.png';
import laptopKJ from './assets/laptopKJ.png';
import desktopKJ from './assets/desktopKJ.png';

import mobileMP from './assets/mobileMP.png';
import tabletMP from './assets/tabletMP.png';
import laptopMP from './assets/laptopMP.png';
import desktopMP from './assets/desktopMP.png';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  p {
    padding: 0.3em 0.5em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 2px sold #000;
    background: #fff;
    pointer-events: none;
    z-index: 150;
  }
`;

export default ({ site }) => {
  const images = {
    career: {
      mobile: mobileCA,
      tablet: tabletCA,
      laptop: laptopCA,
      desktop: desktopCA
    },
    ctw: {
      mobile: mobileCTW,
      tablet: tabletCTW,
      laptop: laptopCTW,
      desktop: desktopCTW
    },
    wav: {
      mobile: mobileWAV,
      tablet: tabletWAV,
      laptop: laptopWAV,
      desktop: desktopWAV
    },
    erc: {
      mobile: mobileERC,
      tablet: tabletERC,
      laptop: laptopERC,
      desktop: desktopERC
    },
    hrt: {
      mobile: mobileHRT,
      tablet: tabletHRT,
      laptop: laptopHRT,
      desktop: desktopHRT
    },
    pp: {
      mobile: mobilePP,
      tablet: tabletPP,
      laptop: laptopPP,
      desktop: desktopPP
    },
    pitt: {
      mobile: mobilePitt,
      tablet: tabletPitt,
      laptop: laptopPitt,
      desktop: desktopPitt
    },
    pc: {
      mobile: mobilePC,
      tablet: tabletPC,
      laptop: laptopPC,
      desktop: desktopPC
    },
    kj: {
      mobile: mobileKJ,
      tablet: tabletKJ,
      laptop: laptopKJ,
      desktop: desktopKJ
    },
    mp: {
      mobile: mobileMP,
      tablet: tabletMP,
      laptop: laptopMP,
      desktop: desktopMP
    }
  };
  return (
    <Wrapper>
      <ResponsiveView
        wrapper={mobile}
        image={images[site].mobile}
        x={0}
        y={0}
        type="mobile"
      />
      <ResponsiveView
        wrapper={tablet}
        image={images[site].tablet}
        x={1}
        y={0}
        type="tablet"
      />
      <ResponsiveView
        wrapper={laptop}
        image={images[site].laptop}
        x={0}
        y={1}
        type="laptop"
      />
      <ResponsiveView
        wrapper={desktop}
        image={images[site].desktop}
        x={1}
        y={1}
        type="desktop"
      />
      <p>Click images to expand</p>
    </Wrapper>
  );
};
