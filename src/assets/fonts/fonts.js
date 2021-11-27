

import { createGlobalStyle } from 'styled-components';
import Helvetica from './Helvetica.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'helvetica',
    src: local('helvetica'),
    url(${Helvetica}) format("truetype"),
    font-weight: 300;
    font-style: normal;
  }
`;

