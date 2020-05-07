import { createGlobalStyle } from 'styled-components';
import AllerDisplay from '../fonts/AllerDisplay.ttf';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    @font-face {
        font-family: 'AllerDisplay';
        src: local('AllerDisplay'), local('Aller Display'), 
        url(${AllerDisplay}) format('truetype');
}
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem;
        background-color: #3b4263;
        font-family: 'Aller Display', sans-serif;
        
    }
`;

export default GlobalStyle;
