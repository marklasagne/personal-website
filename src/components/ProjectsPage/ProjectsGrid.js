import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'; 
import GridItem from './GridItem.js';
import { Row } from '../PageComponents.js';
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
        <Row>
          <PillButton class="button">Pill Button 1</PillButton>
          <PillButton class="button">Pill Button 2</PillButton>
          <PillButton class="button">Pill Button 3</PillButton>
        </Row>
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

const PillButton = styled.button`
  background-color: #ddd;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 30px;
`;
  
  export default ProjectGrid;

