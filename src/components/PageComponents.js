//  https://styled-components.com/
import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const PageContainer = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`;

export const Row = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
}
`;

export const Image = styled.img`
    max-width: 100%;
    width: 90%;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)
`;

export const VideoPlayer = styled(ReactPlayer)`
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 100%;
  height: auto;
`;

export const TextLink = styled.a`
    color: #000000;
`;

export const MainFont = styled.div`
    font-family: Verdana; 
`;







