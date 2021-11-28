/*
Mark Lisanti 2021

Portfolio page for Smart Palette
*/

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { SingleColumnRow, TwoColumnRow, Left, Right, Heading, Text } from '../Styles';
import SmartPalette_0 from '../../assets/images/SmartPalette/SmartPalette_0.png';
import SmartPalette_1 from '../../assets/images/SmartPalette/SmartPalette_1.png';
import SmartPalette_2 from '../../assets/images/SmartPalette/SmartPalette_2.png';
import SmartPalette_3 from '../../assets/images/SmartPalette/SmartPalette_3.png';
import SmartPalette_4 from '../../assets/images/SmartPalette/SmartPalette_4.png';
import SmartPalette_5 from '../../assets/images/SmartPalette/SmartPalette_5.png';
import SmartPalette_6 from '../../assets/images/SmartPalette/SmartPalette_6.png';
import SmartPalette_420 from '../../assets/images/SmartPalette/bart_palette.gif';

const BackgroundImage = styled.img`
    position: absolute;
    z-index: -1;
    width: 1000px;
    @media only screen and (max-width: 1000px) {
        width: 95%;
    }
`;

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial;
  }
`;

const SmartPalette = () => {

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
          <img src={SmartPalette_2} style={{ width: '75%', marginTop: 60 }} alt="here we go again." />
          <BackgroundImage src={SmartPalette_1} style={{ transform: `translate(0px, 50px)` }} alt="whoops! there was an issue." />
        </ SingleColumnRow>

        <SingleColumnRow style={{ backgroundColor: '#6B4073', borderRadius: 50 }}>
          <Text>
            <br />
            Smart Palette is a Web Application for users to generate color palettes by uploading an image.
            The platform uses an unsupervised AI algorithm to choose the optimal diverse color
            series for the image. If you do not like what is generated, you can run it again and
            get a different result. You can view other color palettes created by different users.
            <br />
            <br />
            Team:  Jacob Thomas, Kevin Conti, Thomas Taylor, Devan Corcoran, Mark Lisanti <br />
            Role(s): Developer,  Designer <br />
            Stack: PostgresSQL, Python, HTML/CSS/JS

          </Text>
        </ SingleColumnRow>

        <SingleColumnRow>
          <img src={SmartPalette_420} style={{ width: '50%' }} alt="here we go again." />
          <BackgroundImage src={SmartPalette_0} style={{ transform: `translate(0px, -26px)` }} alt="whoops! there was an issue." />
        </ SingleColumnRow>

        <TwoColumnRow data-aos='fade-up'>
          <Left>
            <Heading>
              But why?
            </Heading>
            <Text>
              For anyone from painters, to web designers, to interior designers, color palettes are useful.
              If a user has a picture or a piece of art that they love the colors of, they can quickly
              create a palette with it.
              <br />
              <br />
              We performed requirements elicitation with five unique users in order to grasp a consistent
              picture of the user’s requirements. Requirements were gathered from the users in a group
              setting through an open-ended dialogue with a focus on user creativity in order to prevent
              developer bias in the elicitation process. Afterwards, requirements analysis was used to
              determine specific feature expectations, as well as to resolve ambiguity in requirements.
            </Text>
            <Heading>
              Requirements
            </Heading>
            <Text>
              ⦁    Able to create users and store usernames/passwords in database <br />
              ⦁    Users able to upload photos and generate palettes until they get the one they like <br />
              ⦁    Store photo file paths in database <br />
              ⦁    Store palettes created in database <br />
              ⦁    Palettes created by all users visible on website palette timeline
            </Text>
          </Left>
          <Right>
            <img src={SmartPalette_4} style={{ width: '90%' }} alt="here we go again, jk." />
            <img src={SmartPalette_3} style={{ width: '90%' }} alt="here we go again again." />
          </Right>
        </TwoColumnRow>

        <TwoColumnRow data-aos='fade-up'>
          <Left>
            <Heading>
              Architectural Design
            </Heading>
            <Text>
              This application uses a PostgresSQL database
              (relational database) which communicates via a web-based API,
              which the user is able to interact with via an HTML/CSS/JS user interface.

            </Text>
            <Heading>
              Component Design
            </Heading>
            <Text>
              Our three modules are the User Interface (UI), API, and the database (DB)<br />
              ⦁	UI:There are several interfaces for the UI. There is a login screen, user image upload screen, sample image screen , account registration screen<br />
              ⦁	API: The API allows for various inputs that create functionality. The API utilizes a CRUD interface with regards to the five major resources of the project: color, user, palette, color-palette, and image<br />
              ⦁	DB: The database interface is accessed via ORM (object relational mapping) pattern via the API. The end user is unable to interact with any input our output without utilizing the API as a form of middleware.<br />

            </Text>
          </Left>
          <Right>
            <img src={SmartPalette_5} style={{ width: '90%' }} alt="here we go again, jk." />
            <img src={SmartPalette_6} style={{ width: '90%' }} alt="here we go again again." />
          </Right>
        </TwoColumnRow>

        <SingleColumnRow data-aos='fade-up'>
          <Text>
            Unfortuantely the submitted interface, while functional, has an unfinished look and does
            not do the well designed backend justice.  You can visit the site at:
            https://smartpalette.herokuapp.com
            <br />
            <br />
            I hope to redo the interface as a future project.
          </Text>
        </ SingleColumnRow>
      </motion.div>
    </>
  );
};

export default SmartPalette;

