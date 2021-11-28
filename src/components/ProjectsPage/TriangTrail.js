/*
Mark Lisanti 2021

Portfolio page for Triangle Trail Status
*/

import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';
import { SingleColumnRow, TwoColumnRow, Left, Right, Heading, Text, LinkText } from '../Styles';
import TriangTrail_0 from '../../assets/images/TriangleTrailStatus/TriangTrail_0.png';
import TriangTrail_1 from '../../assets/images/TriangleTrailStatus/TriangTrail_1.png';
import TriangTrail_2 from '../../assets/images/TriangleTrailStatus/TriangTrail_2.png';
import TriangTrail_3 from '../../assets/images/TriangleTrailStatus/TriangTrail_3.png';
import TriangTrail_4 from '../../assets/images/TriangleTrailStatus/TriangTrail_4.png';
import TriangTrail_5 from '../../assets/images/TriangleTrailStatus/TriangTrail_5.png';
import TireGif from '../../assets/images/TriangleTrailStatus/tire_animation.gif';

const BackgroundImage = styled.img`
    position: absolute;
    z-index: -1;
    @media only screen and (max-width: 750px) {
        display: none;
    }
`;

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Roboto;
  }
`;

const TriangTrail = () => {
  
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
        <SingleColumnRow data-aos='fade-up'>
          <img src={TriangTrail_0} style={{ width: '50%' }} alt="whoops! something did not load." />
        </ SingleColumnRow>

        <TwoColumnRow data-aos='fade-up'>
          <Left>
            <Text>
              Triangle Trail Status is a mobile application aimed to give users an easier experience
              checking for where to ride. In the application,
              you can favorite trails which gives the option to receive post notifications if that trail either
              opens or closes.
            </Text>
          </Left>
          <Right>
            <Text>
              Role(s): Designer, Developer
            </Text>
            <Text>
              Stack: React-native, Firestore and Cloud functions in Firebase, NodeJS - Cloud Foundry
              on IBM Cloud
            </Text>
          </Right>
        </TwoColumnRow>

        <SingleColumnRow data-aos='fade-up'>
          <ReactPlayer url='https://www.youtube.com/watch?v=JDh9jO79lLc' />
          <BackgroundImage src={TriangTrail_4} style={{ transform: `translate(150px, -275px)` }} alt="whoops! there was an issue." />
          <BackgroundImage src={TriangTrail_5} style={{ transform: `translate(-200px, 300px)` }} alt="this is a unique alt tag" />
        </ SingleColumnRow>

        <TwoColumnRow data-aos='fade-up'>
          <Left>
            <Heading>
              Problem and Solution
            </Heading>
            <Text>
              <LinkText href="https://www.trianglemtb.com/" target="_blank">Triangle MTB’s website</LinkText> is not very friendly to check on your mobile device.
              As community members update the status’s up trails you may miss when your favorite trail opens,
              missing the opportunity to ride that day.
            </Text>
            <Text>
              Triangle Trail Status provides a lightweight two-page application that allows users to favorite trails of their choice.
              Once favorited the user may receive push notifications when the trail’s status is updated.
            </Text>
          </Left>
          <Right>
            <img src={TriangTrail_1} alt="are aliens real?" styles={{ width: '100%' }} />
          </Right>
        </TwoColumnRow>

        <TwoColumnRow data-aos='fade-up'>
          <Left>
            <Heading>
              Design and Style
            </Heading>
            <Text>
              The project started because I wanted to make and
              <LinkText href="https://lottiefiles.com/49498-triangle-trail-status-landing-page" target="_blank"> animate a logo</LinkText>,
              specifically a triangle tire.
              After initially sketching and learning different tools to digitalize my drawings I decided to
              write some code to implement my animation on web or mobile applications. This led to me fleshing
              out the ideas and final design of the app.  Once I had deployed test versions of the app I used
              feedback from users to make tweaks and add features to quickly add updated releases.
            </Text>
          </Left>
          <Right>
            <img src={TireGif} style={{ position: 'absolute', transform: `translate(175px, 50px)`, zIndex: -1 }} alt="hello world" />
            <img src={TriangTrail_2} alt="wow I used a lot of images." styles={{ width: '90%' }} />
          </Right>
        </TwoColumnRow>

        <SingleColumnRow data-aos='fade-up'>
          <img src={TriangTrail_3} style={{ width: '90%' }} alt="okay, last one to make unique." />
        </ SingleColumnRow>

        <SingleColumnRow data-aos='fade-up'>
          <Heading><LinkText href="https://play.google.com/store/apps/details?id=com.triangletrailstatus&hl=en_US&gl=US" target="_blank">Now available in the Google Play store.</LinkText></Heading>
        </ SingleColumnRow>
      </motion.div>
    </>
  );
};

export default TriangTrail;

