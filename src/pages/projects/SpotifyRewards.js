// Personal website and portfolio //
// 2023                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Spotify Rewards Page

import React from 'react';
import 'aos/dist/aos.css';
import { Row, PageContainer, Image } from '../../components/PageComponents.js';
import { SpotifyRewardsData } from '../../assets/data/pages/spotifyrewards.js';

const SpotifyRewards = () => {

  return (
    <>
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

