// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Portfolio page for Game of Life

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Column, Image, TextLink } from '../../components/PageComponents.js';
import { LifesAGameData } from '../../assets/data/pages/lifesagame.js'

const LifesAGame = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <motion.div
        key='gameoflife'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Row>
          <h1>{LifesAGameData[0].heading}</h1>
        </Row>

        <Row>
          <p>
              Role(s): {LifesAGameData[0].roles}
              <br />
              Stack: {LifesAGameData[0].stack}
          </p>
        </Row>

        <Row>
          <Column>
            <p>{LifesAGameData[1].text}</p>
          </Column>
          <Column>
            <Image src={LifesAGameData[1].image} alt="real?" />
          </Column>
        </ Row>

        <Row>
          <Column>
            <p>{LifesAGameData[2].text}</p>
            <br></br>
            <p><TextLink href="https://editor.p5js.org/lisantimark/sketches/SPe3MlTnW" rel="noopener noreferrer" target="_blank">Try it yourself here.</TextLink></p>
          </Column>
          <Column>
            <Image src={LifesAGameData[2].image} alt="real?" />
          </Column>
        </ Row>

        <Row data-aos='fade-up'>
          <Column>
            <h1>{LifesAGameData[3].heading}</h1>
            <p>{LifesAGameData[3].text}</p>
          </Column>
        </Row>
      </motion.div>
    </>
  );
}

export default LifesAGame;

