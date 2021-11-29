import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { TwoColumnRow, Left, Right, SketchIcon } from './CreativeCodeStyles';
import { Heading, Text } from '../Styles';
import { createGlobalStyle } from 'styled-components';
import CreativeCode_0 from '../../assets/images/CreativeCode/CreativeCode_0.gif';
import CreativeCode_1 from '../../assets/images/CreativeCode/CreativeCode_1.gif';
import CreativeCode_2 from '../../assets/images/CreativeCode/CreativeCode_2.gif';
import p5 from '../../assets/icons/p5.svg';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial;
  }
`;

const CreativeCode = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <GlobalStyle />
                <TwoColumnRow style={{ backgroundColor: '#830d4c' }}>
                    <Left>
                        <Heading>
                            3d Audio Visualizer
                        </Heading>
                        <Text>
                            This audio visualizer uses fft data from audio files.  The
                            waveform is passed as a uniform to a vertex shader to manipulate the shape of the 3d model.
                            The amplitude is used to change the rotation speed when reaching a certain level.
                        </Text>
                        <a href="https://editor.p5js.org/lisantimark/sketches/4QeRjNe3a" target="_blank"><SketchIcon src={p5}></SketchIcon></a>
                    </Left>
                    <Right>
                        <img src={CreativeCode_2} style={{ width: '100%' }} alt="here we go again, jk." />
                    </Right>
                </TwoColumnRow>
                <TwoColumnRow style={{ backgroundColor: '#2F2F2F' }}>
                    <Left>
                        <Heading>
                            Game of Life Visualization
                        </Heading>
                        <Text>
                            Using my own implementation of Conway's game of life I visualize an 11x11 grid.
                            The flashing and rotating cells represent alive cells.  The algorithm code is hosted
                            on IBM Cloud's serverless functions platform and called through an API Gateway endpoint.
                        </Text>
                        <a href="https://editor.p5js.org/lisantimark/sketches/SPe3MlTnW" target="_blank"><SketchIcon src={p5}></SketchIcon></a>
                    </Left>
                    <Right>
                        <img src={CreativeCode_0} style={{ width: '100%' }} alt="alt tag." />
                    </Right>
                </TwoColumnRow>
                <TwoColumnRow style={{ backgroundColor: '#303030' }}>
                    <Left>
                        <Heading>
                            Spiral of Skulls
                        </Heading>
                        <Text>
                            Exploration of trigonometry functions.  Using polar coordinates and webGL I create a spiral of
                            rotating skulls.
                        </Text>
                        <a href="https://editor.p5js.org/lisantimark/sketches/o2PLNIeM0" target="_blank"><SketchIcon src={p5}></SketchIcon></a>
                    </Left>
                    <Right>
                        <img src={CreativeCode_1} style={{ width: '100%', }} alt="alt tag." />
                    </Right>
                </TwoColumnRow>
            </motion.div>
        </>
    );
};

export default CreativeCode;

