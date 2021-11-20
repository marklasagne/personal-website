import React from 'react';
import {
    Item
  } from './ProjectsGridStyles';

const GridItem = ({title, image, description}) => {
    return (
        <>
          <Item src={image} alt="place holder"  style={{width: '100%'}}/>
        </>
    );
  };
  
  export default GridItem;

