import React from 'react';
import {
    GridRow,
    GridColumn,
    Container,
  } from './ProjectsGridStyles';
import GridItem from './GridItem'
import { createGlobalStyle } from 'styled-components';
import projects from '../../assets/data/projects';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

console.log(projects);
const ProjectGrid = () => {
    return (
      <>
        <GlobalStyle /> 
        <Container>
        <GridRow>
          <GridColumn>
            <GridItem title={projects[0].name} image={projects[0].image} description={projects[0].description}/>
          </GridColumn>
          <GridColumn>
          </GridColumn>
        </GridRow> 
        </Container>
      </>
    );
  };
  
  export default ProjectGrid;

