import {
    GridRow,
    GridColumn,
    Container,
  } from './ProjectsGridStyles';
import GridItem from './GridItem'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const ProjectGrid = () => {
    return (
      <>
        <GlobalStyle /> 
        <Container>
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
        </Container>
      </>
    );
  };
  
  export default ProjectGrid;

