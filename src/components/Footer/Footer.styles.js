import { Link } from "react-router-dom";
import styled from "styled-components";


export const Wrapper = styled.footer`
    position: relative;
    padding: 50px 0;
    display: block;
    background-color: #111121;
    font-size: 1.1rem;
    user-select: none;
    margin-top: 100px;
`
export const Logo = styled.div`    
    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    @media (min-width: 1190px) {
        margin-top: auto;
        margin-bottom: auto;
    }
`
export const FooterTitle = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 2rem;
    position: relative;
    &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: -10px;
        height: 4px;
        width: 40px;
        background-color: hsla(0,0%,100%,.8);
    }
`

export const FooterContent = styled.div`

    p {
        margin-bottom: 1.25rem;
        font-weight: 300;
        &:hover {
        color: var(--yellow);
        }
    }

    
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: currentColor;
`
