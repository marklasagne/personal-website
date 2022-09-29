import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import styled from 'styled-components';
import GridItem from './GridItem.js';
import PillFilter from './PillFilter.js';
import { projects } from '../../assets/data/projects';

const ProjectGrid = () => {
  
return (
    <>
     <h1>OOPS! </h1>
     <p>I'm tinkering with this page and am not listing any projects at the moment... </p>
     <p>Come back soon please! </p>
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

