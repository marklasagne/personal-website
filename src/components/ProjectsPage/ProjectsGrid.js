import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import styled from 'styled-components';
import GridItem from './GridItem.js';
import PillFilter from './PillFilter.js';
import { projects } from '../../assets/data/projects';

let tagList = [];
projects.forEach((project) => {
  project.tags.forEach((tag) => {
    if (!tagList.includes(tag)) {
      tagList.push(tag);
    }
  });
});

const ProjectGrid = () => {
  const [filterList, setFilterList] = useState(['Featured']); 
  const [projectList, setProjectList] = useState(projects);

  useEffect(() => {
    if (filterList.includes('All')) {
      setProjectList(projects);
    } else {
      let filtered = projects.filter((item) => {
        return item.tags.some((tag) => filterList.includes(tag));
      });
      setProjectList(filtered);
    }
  }, [filterList]);

  return (
    <>
      <PillContainer>
        <PillFilter
          key="All"
          tag="All"
          onClick={() => setFilterList(['All'])}
        />
        {tagList.map((data) => (
          <PillFilter
            key={data}
            tag={data}
            onClick={() => {
              if (data === 'featured') {
                setFilterList((prev) =>
                  prev.includes(data) ? prev.filter((e) => e !== data) : [...prev, data]
                );
              } else {
                setFilterList((prev) =>
                  prev.includes(data) ? prev.filter((e) => e !== data) : [...prev, data]
                );
              }
            }}
          />
        ))}
      </PillContainer>
      <ResponsiveMasonry columnsCountBreakPoints={{ 750: 1, 900: 2 }}>
        <Masonry gutter={8}>
          {projectList.map((data) => (
            <GridItem key={data.id} title={data.name} image={data.image} description={data.description} id={data.id} />
          ))}
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

