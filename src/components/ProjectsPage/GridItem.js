import {
    Item
  } from './ProjectsGridStyles';

import test from '../../assets/images/triangle_trail_status.gif';

const GridItem = () => {
    return (
        <>
          <Item src={test} alt="place holder"  style={{width: '100%'}}/>
        </>
    );
  };
  
  export default GridItem;

