// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Ambie sense project page

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Column, Image } from '../../components/PageComponents.js';

import AmbieSense_0 from '../../assets/images/AmbieSense/AmbieSense_0.png';
import AmbieSense_1 from '../../assets/images/AmbieSense/AmbieSense_1.png';
import AmbieSense_3 from '../../assets/images/AmbieSense/AmbieSense_3.png';
import AmbieSense_4 from '../../assets/images/AmbieSense/AmbieSense_4.png';
import AmbieSense_5 from '../../assets/images/AmbieSense/AmbieSense_5.png';
import AmbieSense_6 from '../../assets/images/AmbieSense/AmbieSense_6.png';

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
        <Row data-aos='fade-up'>
          <Column>
            <Image src={AmbieSense_6} alt="sleepy time" />
          </Column>
          <Column>
            <p>An in-home experience to help support mental health during a pandemic through AR/VR. Project a new environment into your home, while connecting with family and friends. Take a journey, find your meditative place, or simply revamp your space!</p>
            <br/>
            <br/>
            <p>
              Team:  Katherin Gilchrist, Jenny Lee, Mark Lisanti, Priyanka Makin<br />
              Role(s): Developer,  Designer <br />
              Stack: React Native, JavaScript
          </p>
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <ReactPlayer url='https://youtu.be/bjNjeuMzyY0' />
        </Row>

        <Row data-aos='fade-up'>
          <Image src={AmbieSense_1} alt="who let the dogs out" />
        </Row>

        <Row data-aos='fade-up'>
          <Column>
            <h1>Software design and development</h1>
            <p> Topology: Mobile App - Websocket server - p5js sketch <br/>
              <br/>
                The mobile application is currently built and tested for Android but using React Native for possible iOS support in the future.  
                At this stage there is very limited functionality within the app but it is set up for integration with a backend to support user logins and personalized accounts. 
            </p>
          </Column>
          <Column>
            <Image src={AmbieSense_0} alt="I did" />
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <Column>
            <p>
              The mobile application communicates through a local websocket server to change an image in a p5js sketch running on the second system.   
              This sketch is then projected onto a wall or surface through an HDMI cable connected to the second system.  Currently the setup only allows communication between the app and projection if the devices are connected to the same network.  
              As the server is very simple it will need to be expanded for better security and persistence.  
              <br />
              <br />
              The p5js sketch is used to easily utilize HTML canvas to display videos.  It changes the video based on the data sent from the websocket server.  Depending on how the future environments are developed this p5js sketch may be expanded or scrapped for a more robust library.
            </p>
          </Column>
          <Column>
            <Image src={AmbieSense_3}  alt="Thats what she said" />
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <Column>
            <h1>
              Hardware design
            </h1>
            <p>
            The housing for this product was drawn up in Sketchup, a web-based CAD software. It is designed to scale with the hardware we currently have (Auking projector and diffuser) and measures 15 inches in diameter. The projector and diffuser are kept separate from each other. 
            The diffuser steam can escape through openings at the bottom of the sphere. Additionally, RGB LEDs can be added toward the bottom of the AmbieSense housing making it look glowy and modern and can add to the overall ambience. This design can be exported and 3D printed with white filament.
            </p>
          </Column>
          <Column>
            <Image src={AmbieSense_5}  alt="fake image" />
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <ReactPlayer url='https://youtu.be/jSV68a-6djw' />
        </Row>

        <Row data-aos='fade-up'>
          <Column>
            <h1>
              Conclusion
            </h1>
            <p>
              The goal of this project was to design something with the pandemic in mind and I think we achieved this.  We ambitiously designed both software and hardware and unfortunately did not have time to fabricate the hardware components.  
              Other stretch goals included projection mapping, or some sort of AR integration.  Personally I learned a lot and would be happy to revisit the project in the future. 
            </p>
          </Column>
        </Row>
      </motion.div>
    </>
  );
}

export default AmbioSense;

