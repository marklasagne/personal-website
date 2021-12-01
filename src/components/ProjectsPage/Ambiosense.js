import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { SingleColumnRow, Heading } from '../Styles';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Helvetica;
  }
`;

const AmbioSense = () => {
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
                <SingleColumnRow>
                  <Heading>Project is currently in progress... check back soon for full documentation</Heading>
                </SingleColumnRow>
            </motion.div>
        </>
    );
};

export default AmbioSense;

