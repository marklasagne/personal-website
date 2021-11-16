import image from '../../assets/placeholder.svg';
import {
    GridRow,
    GridColumn,
    GridImg,
  } from './ProjectsGridStyles';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`

const ProjectGrid = () => {
    return (
      <>
      <GlobalStyle />
        <GridRow>
          <GridColumn>
            <GridImg src="https://picsum.photos/200" alt="place holder"  style={{width: '100%'}}/>
            <GridImg src="https://picsum.photos/200" alt="place holder"  style={{width: '100%'}}/>
          </GridColumn>
          <GridColumn>
            <GridImg src="https://picsum.photos/200" alt="place holder"  style={{width: '100%'}}/>
            <GridImg src="https://picsum.photos/200" alt="place holder"  style={{width: '100%'}}/>
          </GridColumn>
          <GridColumn>
            <GridImg src="https://picsum.photos/200" alt="place holder"  style={{width: '100%'}}/>
            <GridImg src="https://picsum.photos/200" alt="place holder"  style={{width: '100%'}}/>
          </GridColumn>
        </GridRow>   
      </>
    );
  };
  
  export default ProjectGrid;

