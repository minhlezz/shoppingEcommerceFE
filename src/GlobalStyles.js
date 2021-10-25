import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --max-width: 1280px;
        --white: #fff;
        --orange: #f45831;
        --cyan: #7fffd4;
        --yellow: #ffc904;
        --black: #000;
        --lgrey: #353444;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        color: var(--white);
        background-color: #2a2935;
    }

`

export const Container = styled.div`
    max-width: var(--max-width);
    padding: 0 40px;
    margin: 0 auto;
`

export default GlobalStyles;