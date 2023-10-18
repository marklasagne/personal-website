// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Portfolio page for Smart Palette

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Column, Image, TextLink } from '../../components/PageComponents.js';
import { SmartPaletteData } from '../../assets/data/pages/smartpalette.js';
import SmartPalette_0 from '../../assets/images/SmartPalette/SmartPalette_0.png';

const SmartPalette = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <motion.div
        key='smartpalette'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Row>
          <img src={SmartPalette_0} alt="lets" />
        </ Row>

        <Row data-aos='fade-up'>
          <p>{SmartPaletteData[0].description}</p>
        </Row>
        <Row data-aos='fade-up'>
          <img src={SmartPaletteData[0].image} alt="go a" />
        </ Row>

        <Row data-aos='fade-up'>
          <p>
            Team: {SmartPaletteData[0].team}
            <br />
            Role(s): {SmartPaletteData[0].roles}
            <br />
            Stack: {SmartPaletteData[0].stack}
          </p>
        </Row>

        <Row data-aos='fade-up'>
          <h1>{SmartPaletteData[1].heading}</h1>
          <p>
            {SmartPaletteData[1].text1}
            <br />
            <br />
            {SmartPaletteData[1].text2}
          </p>
        </Row>
        <Row data-aos='fade-up'>
          <Image src={SmartPaletteData[1].image} alt="few" />
        </Row>

        <Row data-aos='fade-up'>

          <h1>{SmartPaletteData[2].heading}</h1>
          <p>
            {SmartPaletteData[2].text[0]}
            <br />
            {SmartPaletteData[2].text[1]}
            <br />
            {SmartPaletteData[2].text[2]}
            <br />
            {SmartPaletteData[2].text[3]}
            <br />
            {SmartPaletteData[2].text[4]}
          </p>
        </Row>
        <Row data-aos='fade-up'>
          <Image src={SmartPaletteData[2].image} alt="drinks" />
        </Row>

        <Row data-aos='fade-up'>
          <h1>{SmartPaletteData[3].heading}</h1>
          <p>{SmartPaletteData[3].text}</p>
        </Row>
        <Row data-aos='fade-up'>
          <Image src={SmartPaletteData[3].image} alt="back" />
        </Row>

        <Row data-aos='fade-up'>
          <h1>{SmartPaletteData[4].heading}</h1>
          <p>
            {SmartPaletteData[4].text1}
            <br />
            {SmartPaletteData[4].text2[0]}
            <br />
            {SmartPaletteData[4].text2[1]}
            <br />
            {SmartPaletteData[4].text2[2]}
          </p>
        </Row>
        <Row data-aos='fade-up'>
          <Image src={SmartPaletteData[4].image} alt="you swore" />
        </Row>

        <Row data-aos='fade-up'>

          <h1>{SmartPaletteData[5].heading}</h1>
          <p>
            {SmartPaletteData[5].text}
            <TextLink href="https://smartpalette.herokuapp.com" target="_blank" rel="noopener noreferrer"> smartpalette.herokuapp.com</ TextLink>
            <br />
            <br />
          </p>
        </Row>
      </motion.div>
    </>
  );
}

export default SmartPalette;

