import {
    Item,
    Overlay
  } from './ProjectsGridStyles';

const GridItem = () => {
    return (
        <>
        <Item src="https://picsum.photos/200" alt="place holder"  style={{width: '100%'}}/>
            <Overlay>
            </Overlay>
        </>
    );
  };
  
  export default GridItem;

