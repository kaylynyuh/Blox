import { createGlobalStyle } from "styled-components";

import generateCSSVars from "./utils/generateCSSVars";
import { theme } from "../theme";

const CSSVars = generateCSSVars(theme);

const BloxStyles = createGlobalStyle`  
/* Base Styles */
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
    color: #212529;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 72px
  }

  :root {
   ${CSSVars}
  }
`;

export default BloxStyles;
