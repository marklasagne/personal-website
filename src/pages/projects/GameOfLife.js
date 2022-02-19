// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Portfolio page for Game of Life

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Column, Image } from '../../components/PageComponents.js';
import { GameOfLifeData } from '../../assets/data/pages/gameoflife.js'

const GameOfLife = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Row>
          <h1>{GameOfLifeData[0].heading}</h1>
        </Row>

        <Row>
          <p>
              Role(s): {GameOfLifeData[0].roles}
              <br />
              Stack: {GameOfLifeData[0].stack}
          </p>
        </Row>

        <Row>
          <Column>
            <p>{GameOfLifeData[1].text}</p>
          </Column>
          <Column>
            <Image src={GameOfLifeData[1].image} alt="real?" />
          </Column>
        </ Row>

        <Row data-aos='fade-up'>
          <Column>
            <h1>{GameOfLifeData[2].heading}</h1>
            <p>{GameOfLifeData[2].text}</p>
          </Column>
        </Row>
      </motion.div>
    </>
  );
}

export default GameOfLife;

