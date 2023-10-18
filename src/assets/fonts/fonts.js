import { createGlobalStyle } from 'styled-components';

import Mainframe from './mainframe.woff';
import Mainframe2 from './mainframe.woff2';
import Roboto from './roboto.woff';
import Roboto2 from './roboto.woff2';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'mainframeregular';
        src: url(${Mainframe}) format('woff2'),
            url(${Mainframe2}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'roboto';
        src: url(${Roboto}) format('woff2'),
            url(${Roboto2}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

export default FontStyles;


