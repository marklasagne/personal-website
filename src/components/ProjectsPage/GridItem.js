import React from 'react';
import {useNavigate} from 'react-router-dom';
import {
    Item
  } from './ProjectsGridStyles';

const GridItem = ({title, image, description, id}) => {
    const navigate = useNavigate();
    
    const handleRoute = () =>{ 
      navigate("/projects/triangle-trail-status");
    };
  
    return (
        <>
          <Item src={image} alt='place holder'  style={{width: '100%'}} onClick={handleRoute} />
        </>
    );
  };
  
  export default GridItem;

