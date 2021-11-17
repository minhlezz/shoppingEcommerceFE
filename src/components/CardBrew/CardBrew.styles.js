import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

export const CardLink = styled(Link)`
    text-decoration: none;
    color: currentColor;
    border-radius: 16px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 12%);
    display: block;
    height: 100%;
    overflow: hidden;
    transition: .3s cubic-bezier(.55,.085,.68,.53);
    &:hover {
        transform: translateY(-16px);
    }
    @media (max-width: 500px) {
        transform: translateY(-8px);
    }
`

export const CardImage = styled.div`
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    max-height: 250px;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

   
`

export const CardContent = styled.div`
    padding: 20px;
`

export const Title = styled.div`
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
`
