import React from 'react';
import styled from 'styled-components';
import GridItem from './GridItem';
import { createGlobalStyle } from 'styled-components';
import { projects } from '../../assets/data/projects';

let totalProjects = projects.length;
let leftProjects = projects.slice(0, totalProjects/2)
let rightProjects = projects.slice(totalProjects/2, totalProjects)

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const ProjectGrid = () => {
    return (
      <>
        <GridRow>
        <GlobalStyle />
        <GridColumn>
            {leftProjects.map((data, id) => {
              return(
                <GridItem title={data.name} image={data.image} description={data.description} id={data.id}/>
              )
            })}
          </GridColumn> 
          <GridColumn>
            {rightProjects.map((data, id) => {
              return(
                <GridItem title={data.name} image={data.image} description={data.description} id={data.id}/>
              )
            })}
          </GridColumn>
        </GridRow>
      </>
    );
  };

const GridRow = styled.div`
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    position: relative;
    @media screen and (max-width: 700px) {
        padding: 0 15px;
  }  
`;
  
const GridColumn = styled.div`
    -ms-flex: 50%; /* IE10 */
    flex: 50%%;
    max-width: 50%;
    padding: 0 5px;
    @media screen and (max-width: 850px) {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
  }  
`;
  
  export default ProjectGrid;

