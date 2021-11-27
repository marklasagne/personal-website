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

const ProjectGrid = () => {
    return (
      <>
        <GlobalStyle /> 
        <Container>
        <GridRow>
          <GridColumn>
            <GridItem title={projects[0].name} image={projects[0].image} description={projects[0].description} id={projects[0].id}/>
            <GridItem title={projects[1].name} image={projects[1].image} description={projects[1].description} id={projects[1].id}/>
            <GridItem title={projects[3].name} image={projects[3].image} description={projects[3].description} id={projects[3].id}/>
          </GridColumn>
          <GridColumn>
            <GridItem title={projects[4].name} image={projects[4].image} description={projects[4].description} id={projects[4].id}/>
            <GridItem title={projects[2].name} image={projects[2].image} description={projects[2].description} id={projects[2].id}/>
          </GridColumn>
        </GridRow> 
        </Container>
      </>
    );
  };
  
  export default ProjectGrid;

