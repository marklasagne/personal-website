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
        <ResponsiveMasonry columnsCountBreakPoints={{750: 1, 900: 2}}>
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

const PillContainer = styled.div`
  align-items: left;
  padding: 0.875rem;
`;

export default ProjectGrid;

