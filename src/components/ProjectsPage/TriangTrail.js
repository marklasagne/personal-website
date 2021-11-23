import React from 'react';
import ReactPlayer from 'react-player';
import {
    Container,
    SingleColumnRow,
    TwoColumnRow,
    ThreeColumnRow,
    Left,
    Right,
    Heading,
    Text
  } from './TriangTrailStyles';

  
import TriangTrail_0 from '../../assets/images/TriangTrail_0.png';
import TriangTrail_1 from '../../assets/images/TriangTrail_1.png';
import TriangTrail_2 from '../../assets/images/TriangTrail_2.png';
import TriangTrail_3 from '../../assets/images/TriangTrail_3.png';

const TriangTrail = () => {
    return (
        <>
        <Container>
          <SingleColumnRow>
            <img src={TriangTrail_0} style={{width: '50%'}} />
          </ SingleColumnRow>

          <TwoColumnRow>
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

          <SingleColumnRow>
            <ReactPlayer url='https://www.youtube.com/watch?v=JDh9jO79lLc' />
          </ SingleColumnRow>

          <TwoColumnRow>
            <Left>
              <Heading>
                  Problem and Solution
              </Heading>
              <Text>
                  Triangle MTB’s website is not very friendly to check on your mobile device.  
                  As community members update the status’s up trails you may miss when your favorite trail opens, 
                  missing the opportunity to ride that day.  
              </Text>
              <Text>
                Triangle Trail Status provides a lightweight two-page application that allows users to favorite trails of their choice.  
                Once favorited the user may receive push notifications when the trail’s status is updated.  
              </Text>
            </Left>
            <Right>
              <img src={TriangTrail_1} />
            </Right>
          </TwoColumnRow>

          <TwoColumnRow>
            <Left>
             <img src={TriangTrail_2} />
            </Left>
            <Right>
              <Heading>
                  Design and Style
              </Heading>
              <Text>
                  The project started because I wanted to make and animate a logo, specifically a triangle tire.  
                  After initially sketching and learning different tools to digitalize my drawings I decided to 
                  write some code to implement my animation on web or mobile applications. This led to me fleshing 
                  out the ideas and final design of the app.  Once I had deployed test versions of the app I used 
                  feedback from users to make tweaks and add features to quickly add updated releases.
              </Text>
            </Right>
          </TwoColumnRow>

          <SingleColumnRow>
          <img src={TriangTrail_3} style={{width: '100%'}} />
          </ SingleColumnRow>

        </Container>
          
        </>
    );
  };
  
  export default TriangTrail;

