import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
   max-width: 1200px;
   margin-right: auto;
   margin-left: auto;
   height: 100%;

   .swiper-wrapper{
     
    }
    .swiper-slide {
        flex-basis: 1;
    }
`



export const SubBackground = styled.div`
    position: absolute;
    top: 0;
    left: -25%;
    right:-25%;
    bottom: 20%;
    border-radius: 0 0 50% 50%/0 0 25% 25%;
    border-color: transparent transparent #fff;
    background-image: linear-gradient(transparent,rgba(0,0,0,.2) 99%,#fff);
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    opacity: 0;
    background-color: #a43f41;
    transition: .3s cubic-bezier(.55,.085,.68,.53);
    overflow: hidden;
`

export const Card = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 12%);
    border: 1px solid #353444;
    text-decoration: none;
    color: inherit;
    height: 100%;
    overflow: hidden;
    transition: .3s cubic-bezier(.55,.085,.68,.53);
    
    &:hover {
        transform: translateY(-10px);
    }

    &:hover ${SubBackground} {
        opacity: 1;
    }

`

export const CardImage = styled.div`
    position: relative;
    padding-top: 88%;
    border-radius: 16px 16px 0 0;
    img {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        height: 100%;
        width: auto;
        max-height: 250px;
        z-index: 3;
    }
`


export const CardContent = styled.div`  
   display: flex;
   flex-direction: column;
   padding: 0 16px 16px;

`

export const Price = styled.div`
    text-transform: uppercase;
    width: 100%;
    font-weight: 300;
`

export const Title = styled.div`
    text-transform: uppercase;
    font-weight: 400;
    margin-top: 8px;
    letter-spacing: 0.0625rem;
    font-size: 1.2rem;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
`


export const Info = styled.div`
    width: 100%;
    margin: 8px 0;
    font-size: 14px;
    font-weight: 300;
`


