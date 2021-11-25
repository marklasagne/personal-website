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
} from './CreativeCodeStyles';
import CreativeCode_0 from '../../assets/images/creative_code.gif';
import CreativeCode_1 from '../../assets/images/CreativeCode_0.gif';



const CreativeCode = () => {
    return (
        <>
          <Container>
            <TwoColumnRow style={{backgroundColor: '#830d4c'}}>
                <Left>
                    <Heading>
                    3d Audio Visualizer 
                    </Heading>
                    <Text>
                    This audio visualizer uses fft data from audio files.  The 
                    waveform is passed as a uniform to a vertex shader to manipulate the shape of the 3d model.
                    The amplitude is used to change the rotation speed when reaching a certain level.
                    </Text>
                </Left>
                <Right>
                    <img src={CreativeCode_0} style={{width: '80%', }} alt="here we go again, jk."/>
                </Right>
            </TwoColumnRow>
            <TwoColumnRow style={{backgroundColor: '#2F2F2F'}}>
                <Left>
                    <Heading>
                    Game of Life Visualization
                    </Heading>
                    <Text>
                    Using my own implementation of Conway's game of life I visualize an 11x11 grid.  
                    The flashing and rotating cells represent alive cells.  The algorithm code is hosted 
                    on IBM Cloud's serverless functions platform and called through an API Gateway endpoint.  
                    </Text>
                </Left>
                <Right>
                    <img src={CreativeCode_1} style={{width: '80%', }} alt="alt tag."/>
                </Right>
            </TwoColumnRow>
          </Container>
        </>
    );
  };
  
  export default CreativeCode;

