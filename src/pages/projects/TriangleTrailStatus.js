// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Triangle Trail Status Page

import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Row, Column, Image } from '../../components/PageComponents.js';

import TriangTrail_0 from '../../assets/images/TriangleTrailStatus/TriangTrail_0.png';
import TriangTrail_1 from '../../assets/images/TriangleTrailStatus/TriangTrail_1.png';
import TriangTrail_2 from '../../assets/images/TriangleTrailStatus/TriangTrail_2.png';
import TriangTrail_3 from '../../assets/images/TriangleTrailStatus/TriangTrail_3.png';
import TriangTrail_4 from '../../assets/images/TriangleTrailStatus/TriangTrail_4.png';
import TriangTrail_5 from '../../assets/images/TriangleTrailStatus/TriangTrail_5.png';
import TireGif from '../../assets/images/TriangleTrailStatus/tire_animation.gif';

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
        <Row data-aos='fade-up'>
          <img src={TriangTrail_0} style={{ width: '50%' }} alt='missing image 0?' />
        </ Row>

        <Row data-aos='fade-up'>
          <Column>
            <p>
              Triangle Trail Status is a mobile application aimed to give users an easier experience
              checking for where to ride. In the application,
              you can favorite trails which gives the option to receive post notifications if that trail either
              opens or closes.
            </p>
          </Column>
          <Column>
            <p>
              Role(s): Designer, Developer
            </p>
            <p>
              Stack: React-native, Firestore and Cloud functions in Firebase, NodeJS - Cloud Foundry
              on IBM Cloud
            </p>
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <StyledReactPlayer url='https://www.youtube.com/watch?v=JDh9jO79lLc' />
          <BackgroundImage src={TriangTrail_4} style={{ transform: `translate(150px, -275px)` }} alt='what broke...' />
          <BackgroundImage src={TriangTrail_5} style={{ transform: `translate(-200px, 300px)` }} alt='missing or not?' />
        </ Row>

        <Row data-aos='fade-up'>
          <Column>
            <h1>
              Problem and Solution
            </h1>
            <p>
              <p href="https://www.trianglemtb.com/" target="_blank">Triangle MTB’s website</p> is not very friendly to check on your mobile device.
              As community members update the status’s up trails you may miss when your favorite trail opens,
              missing the opportunity to ride that day.
            </p>
            <p>
              Triangle Trail Status provides a lightweight two-page application that allows users to favorite trails of their choice.
              Once favorited the user may receive push notifications when the trail’s status is updated.
            </p>
          </Column>
          <Column>
            <Image src={TriangTrail_1} alt='are aliens real?' />
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <Column>
            <h1>
              Design and Style
            </h1>
            <p>
              The project started because I wanted to make and
              <p href="https://lottiefiles.com/49498-triangle-trail-status-landing-page" target="_blank"> animate a logo</p>,
              specifically a triangle tire.
              After initially sketching and learning different tools to digitalize my drawings I decided to
              write some code to implement my animation on web or mobile applications. This led to me fleshing
              out the ideas and final design of the app.  Once I had deployed test versions of the app I used
              feedback from users to make tweaks and add features to quickly add updated releases.
            </p>
          </Column>
          <Column>
            <Image src={TireGif} style={{ position: 'absolute', transform: `translate(175px, 50px)`, zIndex: -1 }} alt='boo hoo' />
            <Image src={TriangTrail_2} alt='wow I used a lot of images.' />
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <Image src={TriangTrail_3} alt="okay, last one to make unique." />
        </ Row>

        <Row data-aos='fade-up'>
          <h1><p href="https://play.google.com/store/apps/details?id=com.triangletrailstatus&hl=en_US&gl=US" target="_blank">Now available in the Google Play store.</p></h1>
        </ Row>
      </motion.div>
    </>
  );
}

const BackgroundImage = styled.img`
    position: absolute;
    z-index: -1;
    @media only screen and (max-width: 750px) {
        display: none;
    }
`;

const StyledReactPlayer = styled(ReactPlayer)`
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)
`;

export default TriangTrail;

