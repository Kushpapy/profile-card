import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    &{
        --Dark-cyan: hsl(185, 75%, 39%);
--Very-dark-desaturated-blue: hsl(229, 23%, 23%);
--Dark-grayish-blue: hsl(227, 10%, 46%);
--Dark-gray: hsl(0, 0%, 59%);
    }
}

*,::before,::after{
    padding:0;
    margin: 0;
    box-sizing: border-box;
}

html{
    font-size:62.5%;
}

body{
    min-height: 100vh;
    display: grid;
    place-items: center;
    background-image: url("/bg-pattern-top.svg"), url("/bg-pattern-bottom.svg");
    background-color: var(--Dark-cyan);
     background-repeat: no-repeat; 
    background-position: top, bottom;
    color: var(--Very-dark-desaturated-blue);
    //background-size: 70% auto, 70% auto; 
}
`;

export default GlobalStyle;
