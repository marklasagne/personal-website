import {
    GridRow,
    GridColumn,
  } from './ProjectsGridStyles';
import GridItem from './GridItem'
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
            <GridItem />
            <GridItem />
          </GridColumn>
          <GridColumn>
            <GridItem />
            <GridItem />
          </GridColumn>
          <GridColumn>
            <GridItem />
            <GridItem />
          </GridColumn>
        </GridRow>   
      </>
    );
  };
  
  export default ProjectGrid;

