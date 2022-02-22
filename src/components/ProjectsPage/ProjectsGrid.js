import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
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
  const [leftColumn, setLeftColumn] = useState([]);
  const [rightColumn, setRightColumn] = useState([]);

  const updateLists = () => {
    setLeftColumn(projects.slice(0, projects.length / 2));
    setRightColumn(projects.slice(projects.length / 2, projects.length));
  };
  

  // on load set all of the projects
  useEffect(() =>{
    updateLists();
  }, []);
  
  console.log(filterList)
const [test, setTest] = useState(['a', 'b', 'c', 'd', 'e']);
const [test2, setTest2] = useState(['b', 'd', 'f']);
test.filter((item) => {
  if (test2.includes(item)) {
    setTest(test.filter((e) => (e !== item)));
  } 
})

return (
    <>
      <PillContainer>
        {tagList.map((data) => {
          return (
            <PillFilter key={data} tag={data} onClick={() => {
              if(!filterList.includes(data)) {
                setFilterList(filterList => [...filterList, data]);

                projects.forEach((project) => {
                  project.tags.forEach((tag) => {
                    if (filterList.includes(tag)) {
                      console.log('INCLUDED')
                    } else { 
                    }
                  })
                });
                
              } else {
                setFilterList(filterList.filter((e) => (e !== data)));
                
              }
              }
            }
            />
          )
        })}
      </PillContainer>
      <GridRow>
        <GlobalStyle />
        <GridColumn>
          {leftColumn.map((data) => {
            return (
              <GridItem key={data.id} title={data.name} image={data.image} description={data.description} id={data.id} />
            )
          })}
        </GridColumn>
        <GridColumn>
          {rightColumn.map((data) => {
            return (
              <GridItem key={data.id} title={data.name} image={data.image} description={data.description} id={data.id} />
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

