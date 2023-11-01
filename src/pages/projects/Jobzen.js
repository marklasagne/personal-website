// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Portfolio page for Jobzen

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Image, TextLink, PageContainer } from '../../components/PageComponents.js';
import Jobzen_4 from '../../assets/images/Jobzen/jobzen_4.png';
import Jobzen_5 from '../../assets/images/Jobzen/jobzen_5.png';
import { JobzenData } from '../../assets/data/pages/jobzen.js';

const Jobzen = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <PageContainer>
        <motion.div
          key='jobzen'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <Row data-aos='fade-up'>
            <img src={JobzenData[0].image} style={{ width: '75%' }} alt="save" />
          </Row>
          <Row data-aos='fade-up'>
            <p>{JobzenData[0].description}</p>
            <br />
            <br />
            <p>
              Role(s): {JobzenData[0].roles}
              <br />
              Tools: {JobzenData[0].tools}
            </p>
          </Row>

          <Row data-aos='fade-up'>
            <h1>{JobzenData[1].heading}</h1>
            <p>{JobzenData[1].text1}</p>
          </ Row>

          <Row data-aos='fade-up'>
            <h1>{JobzenData[1].heading2}</h1>
            <p>{JobzenData[1].text2}</p>
            <br />
            <p>{JobzenData[1].text3}</p>
          </Row>

          <Row data-aos='fade-up'>
            <h1>{JobzenData[2].heading}</h1>
            <p>{JobzenData[2].text}</p><br />
            <p>{JobzenData[2].text2}</p><br />
            <p>{JobzenData[2].text3}</p><br />
            <p>{JobzenData[2].text4}</p><br />
            <p>{JobzenData[2].text5}</p><br />
            <p>{JobzenData[2].text6}</p><br />
            <p>{JobzenData[2].text7}</p><br />
            <p>{JobzenData[2].text8}</p>
          </Row>
          <Row data-aos='fade-up'>
            <Image src={JobzenData[2].image} alt="Affinity map" />
          </Row>

          <Row data-aos='fade-up'>
            <h1>{JobzenData[6].heading}</h1>
            <p>{JobzenData[6].text}</p><br />
            <p>{JobzenData[6].text1}</p><br />
            <p>{JobzenData[6].text2}</p><br />
            <p>{JobzenData[6].text3}</p><br />
            <p>{JobzenData[6].text4}</p><br />
            <p>{JobzenData[6].text5}</p>
          </ Row>

          <Row data-aos='fade-up'>
            <h1>{JobzenData[3].heading}</h1>
            <p>{JobzenData[3].text}</p>
          </Row>

          <Row data-aos='fade-up'>
            <Image src={JobzenData[3].image} alt="Job seeker user flow" />
          </Row>

          <Row data-aos='fade-up'>
            <p>{JobzenData[4].text}</p>
          </Row>
          <Row data-aos='fade-up'>
            <Image src={JobzenData[4].image} alt="Company user flow example" />
          </Row>

          <Row data-aos='fade-up'>
            <h1>{JobzenData[5].heading}</h1>
            <p>{JobzenData[5].text1}</p><br />
            <p>{JobzenData[5].text2}</p><br />
            <p>{JobzenData[5].text3}</p><br />
            <p>{JobzenData[5].text4}</p><br />
            <p>{JobzenData[5].text5}</p><br />
            <p>{JobzenData[5].text6}</p><br />
          </Row>
          <Row data-aos='fade-up'>
            <Image src={Jobzen_4} alt="Mid Fidelity prototype" />
          </Row>
        </motion.div>

        <Row data-aos='fade-up'>
          <h1>Final Prototype - <TextLink href="https://www.figma.com/proto/mVHY121NuVW9FyGCxCb4lc/Final-Fidelity?page-id=0%3A1&node-id=2%3A1410&viewport=241%2C48%2C0.26&scaling=min-zoom&starting-point-node-id=2%3A1410" rel="noopener noreferrer" target="_blank">View in Figma</TextLink></h1>
          <br />
          <Image src={Jobzen_5} alt="Final prototype" />
        </Row>
      </PageContainer>
    </>
  );
}

export default Jobzen;

