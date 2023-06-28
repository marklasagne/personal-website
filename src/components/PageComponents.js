//  https://styled-components.com/
import styled from 'styled-components';

export const Row = styled.div`
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    position: relative;
    justify-content: space-around;
    align-items: center;
    margin-top: 6.25rem;
`;

export const Column = styled.div`
    -ms-flex: 50%; /* IE10 */
    flex: 50%%;
    max-width: 50%;
    @media screen and (max-width: 547px) {
        margin-bottom: 3.125rem;
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
  }  
`;

export const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 100%;
    right: 0;
    background-color: #008CBA;
    width: 100px;;
    height: 100%;
    transition: .5s ease;
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

export const PageContainer = styled.div`
    position: relative;
    min-height: 100vh;
`;

export const ContentWrap = styled.div`
    padding-bottom: 10rem;
`;

export const TextLink = styled.a`
    color: #000000;
`;

export const MainFont = styled.div`
    font-family: Verdana; 
`;







