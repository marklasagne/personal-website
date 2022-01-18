import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { SingleColumnRow, Heading, Text, LinkText } from '../PageComponents';
import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';
import CardinalPride_0 from '../../assets/images/CardinalPride/cardinal_pride_1.PNG';
import CardinalPride_1 from '../../assets/images/CardinalPride/cardinal_pride_2.PNG';
import CardinalPride_2 from '../../assets/images/CardinalPride/cardinal_pride_3.PNG';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Helvetica;
  }
`;

const ShadowedImg = styled.img`
    flex: 2;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)
`;

const CardinalPride = () => {
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
                <SingleColumnRow style={{ flexDirection: 'column' }}>
                    <Heading>Cardinal Pride Property Care is a small town handyman business in Wilmington North Carolina.
                     I Designed and developed this static website for the local business.</Heading>
                     <Text>Key technologies include HTML, CSS, Javascript.  <a href="https://www.cardinalprideproperty.com/"  rel="noopener noreferrer" target="_blank"><LinkText>Check out the site today!</LinkText></a></Text>
                   
                </SingleColumnRow>
                <SingleColumnRow>
                    <ShadowedImg src={CardinalPride_0} style={{ width: '90%' }} alt="okay, last one to make unique." />
                </SingleColumnRow>
                <SingleColumnRow>
                    <ShadowedImg src={CardinalPride_1} style={{ width: '90%' }} alt="okay, last one to make unique." />
                </SingleColumnRow>
                <SingleColumnRow>
                    <ShadowedImg src={CardinalPride_2} style={{ width: '90%' }} alt="okay, last one to make unique." />
                </SingleColumnRow>
            </motion.div>
        </>
    );
};

export default CardinalPride;

