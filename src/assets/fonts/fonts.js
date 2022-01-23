import { createGlobalStyle } from 'styled-components';

import RobotoWoff from './roboto.woff';
import RobotoWoff2 from './roboto.woff2';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        url(${RobotoWoff}) format('woff2'),
        url(${RobotoWoff2}) format('woff');
    }
`;

export default FontStyles;