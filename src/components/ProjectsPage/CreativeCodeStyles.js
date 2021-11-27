//  https://styled-components.com/
import styled from 'styled-components';

export const TwoColumnRow = styled.div`
    display: flex;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 9px;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    @media only screen and (max-width: 960px) {
        flex-direction: column;
        gap: 5rem;
    }
`;

export const Left = styled.div`
    flex: 2;
`;

export const Right = styled.div`
    flex: 2;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)
`;

export const BackgroundImage = styled.img`
    position: absolute;
    z-index: -1;
    width: 1000px;
    @media only screen and (max-width: 1000px) {
        width: 95%;
    }
`;





