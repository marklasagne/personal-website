import React from 'react';
import { motion } from 'framer-motion';
import {
    TwoColumnRow,
    Left,
    Right,
} from './CreativeCodeStyles';
import {
    Heading,
    Text,
} from '../Styles';
import CreativeCode_0 from '../../assets/images/CreativeCode/CreativeCode_0.gif';
import CreativeCode_1 from '../../assets/images/CreativeCode/CreativeCode_1.gif';
import CreativeCode_2 from '../../assets/images/CreativeCode/CreativeCode_2.gif';

const CreativeCode = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
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

