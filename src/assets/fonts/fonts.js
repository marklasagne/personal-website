import { createGlobalStyle } from 'styled-components';

import Mainframe from './mainframe-regular-webfont.woff';
import Mainframe2 from './mainframe-regular-webfont.woff2';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'mainframeregular';
        src: url(${Mainframe}) format('woff2'),
            url(${Mainframe2}) format('woff');
        font-weight: normal;
        font-style: normal;

}
`;

export default FontStyles;


