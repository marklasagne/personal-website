// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Portfolio page for Smart Palette

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Column, Image } from '../../components/PageComponents.js';

import SmartPalette_0 from '../../assets/images/SmartPalette/SmartPalette_0.png';
import SmartPalette_3 from '../../assets/images/SmartPalette/SmartPalette_3.png';
import SmartPalette_4 from '../../assets/images/SmartPalette/SmartPalette_4.png';
import SmartPalette_5 from '../../assets/images/SmartPalette/SmartPalette_5.png';
import SmartPalette_6 from '../../assets/images/SmartPalette/SmartPalette_6.png';
import SmartPalette_420 from '../../assets/images/SmartPalette/bart_palette.gif';

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
        <Row>
          <img src={SmartPalette_0} alt="here we go again." />
        </ Row>

        <Row>
          <Column>
            <p>
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
            </p>
          </Column>
          <Column>
            <img src={SmartPalette_420} alt="what even is this" />
          </Column>
        </ Row>

        <Row data-aos='fade-up'>
          <Column>
            <h1>
              But why?
            </h1>
            <p>
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
            </p>
          </Column>
          <Column>
            <Image src={SmartPalette_4} alt="here we go again, jk." />
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <Column>
            <h1>
              Requirements
            </h1>
            <p>
              ⦁    Able to create users and store usernames/passwords in database <br />
              ⦁    Users able to upload photos and generate palettes until they get the one they like <br />
              ⦁    Store photo file paths in database <br />
              ⦁    Store palettes created in database <br />
              ⦁    Palettes created by all users visible on website palette timeline
            </p>
          </Column>
          <Column>
            <Image src={SmartPalette_3} alt="here we go again again." />
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <Column>
            <h1>
              Architectural Design
            </h1>
            <p>
              This application uses a PostgresSQL database
              (relational database) which communicates via a web-based API,
              which the user is able to interact with via an HTML/CSS/JS user interface.

            </p>
          </Column>
          <Column>
            <Image src={SmartPalette_5} alt="im bored" />
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <Column>
            <h1>
              Component Design
            </h1>
            <p>
              Our three modules are the User Interface (UI), API, and the database (DB)<br />
              ⦁	UI:There are several interfaces for the UI. There is a login screen, user image upload screen, sample image screen , account registration screen<br />
              ⦁	API: The API allows for various inputs that create functionality. The API utilizes a CRUD interface with regards to the five major resources of the project: color, user, palette, color-palette, and image<br />
              ⦁	DB: The database interface is accessed via ORM (object relational mapping) pattern via the API. The end user is unable to interact with any input our output without utilizing the API as a form of middleware.<br />
            </p>
          </Column>
          <Column>
            <Image src={SmartPalette_6} alt="thanks for watching" />
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <p>
            Unfortuantely the submitted interface, while functional, has an unfinished look and does
            not do the well designed backend justice.  You can visit the site at:
            https://smartpalette.herokuapp.com
            <br />
            <br />
            I hope to redo the interface as a future project.
          </p>
        </ Row>
      </motion.div>
    </>
  );
}

export default SmartPalette;

