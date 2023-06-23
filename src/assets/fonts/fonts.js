import { createGlobalStyle } from 'styled-components';

import TypeMachine from './type-machine.woff';
import TypeMachine2 from './type-machine.woff2';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'type_machineregular';
        src: local('Type Machine'), local('Type Machine'),
        url(${TypeMachine}) format('woff2'),
        url(${TypeMachine}) format('woff');
    }
`;

export default FontStyles;

import { createGlobalStyle } from 'styled-components';

import TypeMachine from './type_machine-webfont.woff2';
import TypeMachine2 from './type_machine-webfont.woff';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'type_machineregular';
    src: url('./type_machine-webfont.woff2') format('woff2'),
         url('./type_machine-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

    }
`;

export default FontStyles;