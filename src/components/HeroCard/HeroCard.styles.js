import styled from "styled-components";
import { Link } from "react-router-dom";


export const Wrapper = styled(Link)`
    flex-grow: 1;
    text-decoration: none;
    color: var(--white);
    user-select: none;
    position: relative;
    border: 2px solid #353444;
    :hover {
        background-color: var(--lgrey);
    }
`;

export const Name = styled.div`
    background-color: rgba(0,0,0,0.3);
    text-align: center;
    border-bottom-left-radius: 150px 10px;
    font-size: 1.2rem;
    font-weight: 500;
`;

export const Image = styled.div`
    position: relative;
    img {
        width: 100%;
        object-fit: cover;
    }
`;

export const Price = styled.div`
    text-align: center;
    color: var(--yellow);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: 1px;
`;

export const Races = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #ababab;
    transform: translateY(40%);
    text-transform: uppercase;
    writing-mode: vertical-rl;
`
