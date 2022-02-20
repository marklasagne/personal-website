import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import GridItem from './GridItem.js';
import PillFilter from './PillFilter.js';
import { projects } from '../../assets/data/projects';

// split the projects into two columns
let leftColumn = projects.slice(0, projects.length / 2);
let rightColumn = projects.slice(projects.length / 2, projects.length);

// get the tags to render pill filters
let tagList = []; 
projects.forEach((project) => {
  project.tags.forEach((tag) => {
    if (!tagList.includes(tag)) {
      tagList.push(tag);
    }
  })
});

const ProjectGrid = () => {
  const [filter, setFilter] = useState('All');

  return (
    <>
      <PillContainer>
        {tagList.map((data, index) => {
          if (index == 0) {
            return (
              <PillFilter tag={data} />
            )
          } else {
            return (
              <PillFilter tag={data} />
            )
          }   
        })}
      </PillContainer>
      <GridRow>
        <GlobalStyle />
        <GridColumn>
          {leftColumn.map((data) => {
            return (
              <GridItem title={data.name} image={data.image} description={data.description} id={data.id} />
            )
          })}
        </GridColumn>
        <GridColumn>
          {rightColumn.map((data) => {
            return (
              <GridItem title={data.name} image={data.image} description={data.description} id={data.id} />
            )
          })}
        </GridColumn>
      </GridRow>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

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

const PillContainer = styled.div`
  align-items: left;
  padding: 0.875rem;
`;

export default ProjectGrid;

