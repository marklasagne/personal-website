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
    padding: 0 100px;
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
`;




  

  

