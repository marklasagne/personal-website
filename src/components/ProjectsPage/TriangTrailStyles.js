//  https://styled-components.com/
import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
`;

export const SingleColumnRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

export const TwoColumnRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 2rem;
    @media only screen and (max-width: 960px) {
        padding: 10rem 0;
        flex-direction: column;
        gap: 5rem;
        margin-top: 0px;
    }
`;

export const Left = styled.div`
    flex: 2;
`;

export const Right = styled.div`
    flex: 2;
`;

export const Heading = styled.p`
    font-family: helvetica;
    font-size: 2rem;
    margin-bottom: 3rem;
`;

export const Text = styled.p`
    font-family: helvetica;
    font-size: 18px;
    margin-bottom: 2rem;
    .para {
        max-width: 100%;
    }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    z-index: -1;
    @media only screen and (max-width: 960px) {
        width:  125px;
    }
`;





