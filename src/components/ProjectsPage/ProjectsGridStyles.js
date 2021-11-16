//  https://styled-components.com/
import styled from 'styled-components';

export const GridRow = styled.div`
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    padding: 0 4px;
`;
  
export const GridColumn = styled.div`
    -ms-flex: 33.33%; /* IE10 */
    flex: 33.33%%;
    max-width: 33.33%;
    padding: 0 4px;

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
  }  
`;

export const GridImg = styled.img`
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
`;




  

  

