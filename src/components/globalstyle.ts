import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`    
 
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        /*for simplify the conversion of rem - 1.6rem = 16px*/
        font-size: 62.5%; 
    }

    body {
        font-family: 'nunito';
        font-weight: 400;
        font-size: 1.6rem;
    }

    .container {
        max-width: 1440px;
        padding: 0 11rem;
        margin: auto;

        @media only screen and (max-width: 700px) {
            padding: 0 2rem;
   
         }
    }  
    
    ul {
        list-style: none;
    }
`;
export default GlobalStyle;
