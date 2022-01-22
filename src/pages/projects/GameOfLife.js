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

import GameOfLife_0 from '../../assets/images/GameOfLife/GameOfLife_0.gif';
import p5js from '../../assets/icons/p5.svg';


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
          <h1>Game of Life Visualization</h1>
        </ Row>

        <Row>
          <p>
              Team: Mark Lisanti <br />
              Role(s): Developer,  Artist <br />
              Stack: p5js, WebGL, python, OpenWhisk 
          </p>
        </Row>

        <Row>
          <Column>
            <p>
              This generative art piece uses my own implementation of Conway's game of life and visualizes an 11x11 grid.
              Using p5js and WebGL the flashing and rotating cells represent alive cells.  The algorithm is implemented 
              with Python and is running on IBM Cloud's serverless functions platform with OpenWhisk and called through
              and API Gateway endpoint.
            </p>
          </Column>
          <Column>
            <Image src={GameOfLife_0} alt="what even is this" />
          </Column>
        </ Row>
      </motion.div>
    </>
  );
}

export default GameOfLife;

