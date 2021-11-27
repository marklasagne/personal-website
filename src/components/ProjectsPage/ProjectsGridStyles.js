//  https://styled-components.com/
import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
`;

export const GridRow = styled.div`
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    position: relative;
    @media screen and (max-width: 700px) {
        padding: 0 15px;
  }  
`;
  
export const GridColumn = styled.div`
    -ms-flex: 50%; /* IE10 */
    flex: 50%%;
    max-width: 50%;
    padding: 0 5px;
    @media screen and (max-width: 960px) {
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

export const Item = styled.img`
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;   
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)
`;




  

  

