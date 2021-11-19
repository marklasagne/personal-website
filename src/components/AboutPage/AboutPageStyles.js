//  https://styled-components.com/
import styled, {keyframes} from 'styled-components';

export const PortraitContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
`;

const shake = keyframes`
    0% { transform: translate(0px, 0px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(0px, 0px) rotate(0deg); }
`;

export const PortraitImageBackground = styled.img`
    position: relative;
    transform: translateZ(-50px);
`;

export const PortraitImage= styled.img`
    transform: translateZ(50px);
    position: absolute;
    &:hover {
        animation: ${shake} 5s;
        animation-iteration-count: infinite;  
    }
`; 

export const Container = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
`;

export const TopSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    @media only screen and (max-width: 768px) {
        padding: 10rem 0;
        flex-direction: column;
        gap: 5rem;
    }
`;

export const Left = styled.div`
    flex: 2;
`;

export const Right = styled.div`
    flex: 2;
`;

export const AboutHeading = styled.p`
    font-family: helvetica;
    font-size: 3.6rem;
    margin-bottom: 3rem;
`;

export const AboutInfo = styled.p`
    font-family: helvetica;
    margin-bottom: 4rem;
    .para {
    max-width: 100%;
    }
`;

