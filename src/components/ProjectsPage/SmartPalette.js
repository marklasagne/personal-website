import React from 'react';
import {
    Container,
    SingleColumnRow,
    TwoColumnRow,
    Left,
    Right,
    Heading,
    Text,
    BackgroundImage
} from './SmartPaletteStyles';

import SmartPalette_0 from '../../assets/images/SmartPalette_0.png';
import SmartPalette_1 from '../../assets/images/SmartPalette_1.png';
import SmartPalette_2 from '../../assets/images/SmartPalette_2.png';
import SmartPalette_3 from '../../assets/images/bart_palette.gif';

const SmartPalette = () => {
    return (
        <>
        <Container>
          <SingleColumnRow>
            <img src={SmartPalette_2} style={{width: '75%', marginTop: 60}} alt="here we go again."/>
            <BackgroundImage src={SmartPalette_1} style={{transform: `translate(0px, 0px)`}} alt="whoops! there was an issue."/>
          </ SingleColumnRow>

          <SingleColumnRow style={{backgroundColor: '#6B4073',}}>
            <Text>
              <br />
              Smart Palette is a Web Application for users to generate color palettes by uploading an image.
              The platform will use an unsupervised AI algorithm to choose the optimal diverse color 
              series for the image. If they do not like what is generated, they can run it again and 
              get a different result. Users will also be able to view other color palettes created 
              by different users.
              <br />
              <br />
              Team:  Jacob Thomas, Kevin Conti, Thomas Taylor, Devan Corcoran, Mark Lisanti <br />
              Role(s): Developer,  Designer <br />
              Stack: PostgresSQL, Python, HTML/CSS/JS
      
            </Text>
          </ SingleColumnRow>

          <SingleColumnRow>
            <img src={SmartPalette_3} style={{width: '50%'}} alt="here we go again."/>
            <BackgroundImage src={SmartPalette_0} style={{transform: `translate(0px, -26px)`}} alt="whoops! there was an issue."/>
          </ SingleColumnRow>

          <TwoColumnRow>
            <Left>
              <Heading>
                But why?
              </Heading>
              <Text>
                For anyone from painters, to web designers, to interior designers, color palettes are useful. 
                If a user has a picture or a piece of art that they love the colors of, they can quickly 
                create a palette with it.
              </Text>
            </Left>
            <Right>
              <Heading>
                Project Requirements
              </Heading>
              <Text>
                ⦁    Able to create users and store usernames/passwords in database <br />
                ⦁    Users able to upload photos and generate palettes until they get the one they like <br />
                ⦁    Store photo file paths in database <br />
                ⦁    Store palettes created in database <br />
                ⦁    Palettes created by all users visible on website palette timeline 

              </Text>
            </Right>
          </TwoColumnRow>

          <TwoColumnRow>
            <Left>
              
            </Left>
            <Right>
            </Right>
          </TwoColumnRow>

          <SingleColumnRow>
          </ SingleColumnRow>

          <SingleColumnRow>
          </ SingleColumnRow>
        </Container>
        </>
    );
  };
  
  export default SmartPalette;

