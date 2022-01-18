import React from 'react';
import {useNavigate} from 'react-router-dom';
import {
    Item
} from './ProjectsGridStyles';

const GridItem = ({image, id}) => {
    const navigate = useNavigate();
    
    const handleRoute = () =>{ 
        navigate(`/projects/${id}`);
    };
  
    return (
        <>
          <Item src={image} alt='place holder'  style={{width: '100%'}} onClick={handleRoute} />
        </>
    );
  };
  
  export default GridItem;

