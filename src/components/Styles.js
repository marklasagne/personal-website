//  https://styled-components.com/
import styled from 'styled-components';

export const SingleColumnRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
`;

export const TwoColumnRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;
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
`;

export const Heading = styled.p`
    font-size: 2rem;
`;

export const Text = styled.p`
    font-size: 14px;
    .para {
        max-width: 100%;
    }
`;

export const LinkText = styled.a`
    color: #000;
`;

export const SingleRowImage = styled.img`
    width: 50%;
    @media only screen and (max-width: 960px) {
        width: 100%;
    }
`;