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
    padding: 0 35px;
    position: relative;
`;
  
export const GridColumn = styled.div`
    -ms-flex: 33.33%; /* IE10 */
    flex: 33.33%%;
    max-width: 33.33%;
    padding: 0 4px;
    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
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
`;




  

  

