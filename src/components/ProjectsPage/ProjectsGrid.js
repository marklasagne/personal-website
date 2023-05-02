import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import styled from 'styled-components';
import GridItem from './GridItem.js';
import PillFilter from './PillFilter.js';
import { projects } from '../../assets/data/projects';

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
  const [filterList, setFilterList] = useState([]);
  const [projectList, setProjectList] = useState(projects);

  // on load set all of the projects
  useEffect(() =>{
    if (!filterList === undefined || !filterList.length < 1) {
      let filtered = []
      projects.forEach((item) => {
        item.tags.forEach((tag) => {
          if (filterList.includes(tag)) {
            if (!filtered.includes(item)) {
              filtered.push(item);
            }
          } 
        }) 
      })
      setProjectList(filtered);
    } else {
      setProjectList(projects);
    }
  }, [filterList]);
  
return (
    <>
      <PillContainer>
        {tagList.map((data) => {
          return (
            <PillFilter key={data} tag={data} onClick={() => {
              if(!filterList.includes(data)) {
                setFilterList(filterList => [...filterList, data]);
                
              } else {
                setFilterList(filterList.filter((e) => (e !== data)));
              }
            }}
            />
          )
        })}
      </PillContainer>
  
      <GlobalStyle />
      <h2>I'm currently in the process documenting and adding more projects <>&#10084;... Please come back soon!</></h2>
        <ResponsiveMasonry
                columnsCountBreakPoints={{750: 1, 900: 2}}
            >
        <Masonry gutter={8}>
          {projectList.map((data) => {
            return (
              <GridItem key={data.id} title={data.name} image={data.image} description={data.description} id={data.id} />
            )
          })}
       </Masonry>
       </ResponsiveMasonry>
      
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

