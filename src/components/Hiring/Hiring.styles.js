import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    user-select: none;
    /* border: 1px solid #353444; */
    box-shadow: 10px 5px 10px 5px rgb(0 0 0 / 20%);

    @media (max-width: 700px) {
        flex-direction: column;
        /* box-shadow: 0 5px 10px 0 rgb(0 0 0 / 12%); */
    }

`

export const ContentInfo = styled.div`
    width: 50%;
    flex: 0 0 auto;
    @media (max-width: 700px) {
       display: block;
       width: 100%;
    }
`

export const Info = styled.div`
    padding: 56px;
    border-radius: 8px 0 0 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    /* @media (min-width: 701px) {
        box-shadow: 0 5px 10px 0 rgb(255 255 255 / 12%);   
    } */
    border: 1px solid #353444;
    @media (max-width: 700px) {
        padding: 24px;
    }
`

export const Title = styled.h2`
    font-size: 3.5rem;
    font-weight: 500;
    letter-spacing: 0.0625rem;
    @media (max-width: 1130px) {
        font-size: 2.5rem;
    }
    @media (max-width: 700px) {
        font-size: 1.8rem;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: currentColor;
    font-size: 1.5rem;
    &:hover {
        color: var(--cyan);
    }

    @media (max-width: 700px) {
        font-size: 1.2rem;
        text-align: center;
    }
`

export const ContentImage = styled.div`
    width: 50%;
    flex: 0 0 auto;
    order: 2;
    @media (max-width: 700px) {
        order: 0;
        width: 100%;
        display: block;
    }
  
`

export const Image = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border: 1px solid #353444;
    border-radius: 0 8px 8px 0;
    @media (min-width: 700px) {
        /* box-shadow: 0 5px 10px 0 rgb(255 255 255 / 12%); */
    }
    img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            z-index: 3;
            filter: brightness(85%);
    }
`
