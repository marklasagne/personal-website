// Personal website and portfolio //
// 2023                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Spotify Rewards Page

import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, PageContainer, Image } from '../../components/PageComponents.js';
import { SpotifyRewardsData } from '../../assets/data/pages/spotifyrewards.js';
import NavigationArrow from '../../components/NavigationArrow.js';
import Navbar from '../../components/Navbar.js'; 

const SpotifyRewards = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar />
    <NavigationArrow />
      <PageContainer>
        {SpotifyRewardsData.map((data) => {
                return (
                    <Row style={{ margin: 0 }}>
                <Image src={SpotifyRewardsData[data.id].image} alt="save" />
                </Row>
                )
            })}
      </PageContainer>
    </>
  );
}

export default SpotifyRewards;

