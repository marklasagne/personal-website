import {
    Item,
    Overlay
  } from './ProjectsGridStyles';

const GridItem = () => {
    return (
        <>
        <Item src="https://picsum.photos/id/1/200/300" alt="place holder"  style={{width: '100%'}}/>
            <Overlay>
            </Overlay>
        </>
    );
  };
  
  export default GridItem;

