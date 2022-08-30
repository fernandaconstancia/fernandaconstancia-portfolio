import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Ubuntu", Helvetica, Sans-Serif;
    list-style: none;
    
  }

  html {
    background: var(--color-6);
  }

  :root {
    --color-1: #00875f;
    --color-2: #00543B;
    --color-3: #00875F;
    --color-4: #2F9B7B;
    --color-5: #00D494;
    --color-6: #202020;
    --color-7: #333333; 
    --color-8: #6E6E6E;
    --color-9: #ADADAD;

  }
`;